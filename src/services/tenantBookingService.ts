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
    status: status
      ? (status as BookingStatus)
      : { not: BookingStatus.canceled },
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
    <h1>Booking Confirmation</h1>
    <p>Hello ${booking.user.username},</p>
    <p>Your booking has been confirmed.</p>
    <p><strong>Property:</strong> ${booking.room_types.property.name}</p>
    <p><strong>Room Type:</strong> ${booking.room_types.name}</p>
    <p><strong>Total Price:</strong> Rp ${booking.total_price}</p>
    <p><strong>Check-in:</strong> ${formatDateDay(booking.start_date)}</p>
    <p><strong>Check-out:</strong> ${formatDateDay(booking.end_date)}</p>
    <p>Please follow the property’s rules. We look forward to hosting you!</p>
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
