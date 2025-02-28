import { Request, Response } from "express";
import prisma from "../../prisma";
import { BookingStatus } from "prisma/generated/client";
import { sendEmail } from "../../services/emailService";
import { formatDateDay } from "../../utils/formatDate";

export class TenantBookingController {
  async getTenantBookings(req: Request, res: Response): Promise<void> {
    try {
      const { tenantId } = req.params;
      const { status } = req.query;

      // Validate status
      const validStatuses = ["new", "completed", "canceled", "waiting_payment"];
      if (status && !validStatuses.includes(status as string)) {
        res.status(400).json({ error: "Invalid booking status" });
        return;
      }

      // Find all bookings related to properties owned by the tenant
      const bookings = await prisma.booking.findMany({
        where: {
          room_types: {
            property: {
              tenantId,
            },
          },
          status: status ? (status as BookingStatus) : undefined,
        },
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

      res.status(200).send({ bookings });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    }
  }

  async updateBookingStatus(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;
      const { status } = req.body;

      if (!["new", "completed"].includes(status)) {
        res.status(400).json({ error: "Invalid status update" });
        return;
      }

      await prisma.booking.update({
        where: { id: bookingId },
        data: { status },
      });

      res.status(200).json({ message: `Booking status updated to ${status}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async resendBookingConfirmation(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;

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
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      if (booking.status !== "completed") {
        res.status(400).json({ error: "Booking is not completed yet" });
        return;
      }

      // Prepare email content
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

      res
        .status(200)
        .json({ message: "Confirmation email resent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to resend email" });
    }
  }

  async cancelTenantBooking(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;
      const { tenantId } = req.body; // Ensure tenant ID is provided from auth middleware or request body.

      // Find booking and verify tenant ownership
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
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      if (booking.room_types.property.tenantId !== tenantId) {
        res.status(403).json({ error: "Unauthorized to cancel this booking" });
        return;
      }

      if (booking.status !== "new") {
        res.status(400).json({
          error: "Only 'new' bookings (unpaid) can be canceled",
        });
        return;
      }

      // Execute cancellation within a transaction
      await prisma.$transaction([
        prisma.booking.update({
          where: { id: bookingId },
          data: { status: "canceled" },
        }),
        prisma.roomTypes.update({
          where: { id: booking.room_types.id },
          data: { stock: { increment: 1 } }, // Restore stock after cancellation
        }),
      ]);

      res.status(200).send({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    }
  }
}
