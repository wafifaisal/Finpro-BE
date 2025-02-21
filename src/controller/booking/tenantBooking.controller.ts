import { Request, Response } from "express";
import prisma from "../../prisma";
import { BookingStatus } from "prisma/generated/client";

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
}
