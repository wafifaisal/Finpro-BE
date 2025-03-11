import { formatDateDay } from "../utils/formatDate";
import prisma from "../prisma";
import { BookingStatus } from "prisma/generated/client";
import { sendEmail } from "./emailService";

interface GetTenantBookingsParams {
  tenantId: string;
  status?: string;
  search?: string;
  page?: number;
}

export async function getTenantBookings({
  tenantId,
  status,
  search,
  page = 1,
}: GetTenantBookingsParams) {
  const validStatuses = ["new", "waiting_payment", "completed"];
  if (status && !validStatuses.includes(status)) {
    throw new Error("Invalid booking status");
  }

  const itemsPerPage = 4;
  const skip = (page - 1) * itemsPerPage;

  const whereClause: any = {
    room_types: {
      property: {
        tenantId,
      },
    },
    status: status ? (status as BookingStatus) : { not: "canceled" },
  };

  if (search) {
    whereClause.OR = [
      { id: { startsWith: search } },
      {
        room_types: {
          name: { contains: search, mode: "insensitive" },
        },
      },
    ];
  }

  const bookings = await prisma.booking.findMany({
    where: whereClause,
    orderBy: [{ start_date: "asc" }, { end_date: "asc" }],
    take: itemsPerPage,
    skip,
    select: {
      id: true,
      num_of_guests: true,
      total_price: true,
      start_date: true,
      end_date: true,
      status: true,
      payment_proof: true,
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
      room_types: {
        select: {
          name: true,
          price: true,
          property: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const totalCount = await prisma.booking.count({
    where: whereClause,
  });

  return { bookings, totalPages: Math.ceil(totalCount / itemsPerPage) };
}

interface UpdateBookingStatusParams {
  bookingId: string;
  status: string;
}

export async function updateBookingStatus({
  bookingId,
  status,
}: UpdateBookingStatusParams) {
  if (!["new", "completed"].includes(status)) {
    throw new Error("Invalid status update");
  }
  await prisma.booking.update({
    where: { id: bookingId },
    data: { status: status as BookingStatus },
  });
}

export async function resendBookingConfirmation(bookingId: string) {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    select: {
      id: true,
      total_price: true,
      start_date: true,
      end_date: true,
      status: true,
      user: {
        select: {
          email: true,
          username: true,
        },
      },
      room_types: {
        select: {
          name: true,
          property: {
            select: { name: true },
          },
        },
      },
    },
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status !== "completed") {
    throw new Error("Booking is not completed yet");
  }

  const emailContent = `
    <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        background: #ffffff;
        margin: 20px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }

      .header {
        background-color: #007bff;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 22px;
        font-weight: bold;
        border-radius: 8px 8px 0 0;
      }

      .content {
        padding: 20px;
        font-size: 16px;
        color: #333333;
        line-height: 1.6;
      }

      .details-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }

      .details-table td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      .details-table td:first-child {
        font-weight: bold;
        color: #007bff;
      }

      .cta-button {
        display: inline-block;
        background-color: #F8636B;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 15px;
      }

      .cta-button:hover {
        background-color: #D53F3F;
      }

      .footer {
        text-align: center;
        padding: 15px;
        font-size: 14px;
        color: #666666;
        background: #f4f4f4;
        border-radius: 0 0 8px 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Booking Confirmation</div>
      <div class="content">
        <p>Hello <strong>${booking.user.username}</strong>,</p>
        <p>Your booking has been successfully confirmed! Here are the details:</p>

        <table class="details-table">
          <tr>
            <td>Property:</td>
            <td>${booking.room_types.property.name}</td>
          </tr>
          <tr>
            <td>Room Type:</td>
            <td>${booking.room_types.name}</td>
          </tr>
          <tr>
            <td>Total Price:</td>
            <td><strong>Rp ${booking.total_price}</strong></td>
          </tr>
          <tr>
            <td>Check-in:</td>
            <td>${formatDateDay(booking.start_date)}</td>
          </tr>
          <tr>
            <td>Check-out:</td>
            <td>${formatDateDay(booking.end_date)}</td>
          </tr>
        </table>

        <p>Please ensure that you follow the property’s rules. We look forward to hosting you!</p>

        <p>
          <a href="https://nginepin.vercel.app/trips" class="cta-button">View Booking</a>
        </p>

        <br />
        <p>Thank you,</p>
        <p><strong>Nginepin Team</strong></p>
      </div>
      <div class="footer">
        &copy; 2025 Nginepin. All Rights Reserved.
      </div>
    </div>
  </body>
</html>

  `;

  await sendEmail(booking.user.email, "Booking Confirmation", emailContent);
}

interface CancelTenantBookingParams {
  bookingId: string;
  tenantId: string;
}

export async function cancelTenantBooking({
  bookingId,
  tenantId,
}: CancelTenantBookingParams) {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    select: {
      id: true,
      status: true,
      room_types: {
        select: {
          id: true,
          property: {
            select: {
              tenantId: true,
            },
          },
        },
      },
    },
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.room_types.property.tenantId !== tenantId) {
    throw new Error("Unauthorized to cancel this booking");
  }

  if (booking.status !== "new") {
    throw new Error("Only 'new' bookings (unpaid) can be canceled");
  }

  await prisma.$transaction([
    prisma.booking.update({
      where: { id: bookingId },
      data: { status: "canceled" },
    }),
    prisma.roomTypes.update({
      where: { id: booking.room_types.id },
      data: { stock: { increment: 1 } },
    }),
  ]);
}

export async function getTenantExpenditure(tenantId: string) {
  const result = await prisma.booking.aggregate({
    _sum: {
      total_price: true,
    },
    where: {
      room_types: {
        property: {
          tenantId,
        },
      },
      status: "completed",
    },
  });
  return result._sum.total_price || 0;
}

export async function countTenantReviews(tenantId: string) {
  const result = await prisma.review.aggregate({
    _avg: { rating: true },
    _count: { rating: true },
    where: {
      room_types: {
        property: {
          tenantId,
        },
      },
    },
  });
  return {
    totalReviews: result._count.rating,
    avgRating: result._avg.rating || 0,
  };
}
