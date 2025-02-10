import { Request, Response } from "express";
import prisma from "../../prisma";

export class UserBookingController {
  async newBooking(req: Request, res: Response): Promise<void> {
    const {
      userId,
      roomTypeId,
      numOfGuests,
      startDate,
      endDate,
      paymentMethod,
    } = req.body;
    try {
      const roomType = await prisma.roomTypes.findUnique({
        where: { id: roomTypeId },
      });

      if (!roomType) {
        res.status(404).send({ error: "Room type not found" });
        return;
      }

      const unavailableDates = await prisma.unavailable.findMany({
        where: {
          room_types_id: roomTypeId,
          OR: [
            {
              start_date: { lte: new Date(endDate) },
              end_date: { gte: new Date(startDate) },
            },
          ],
        },
      });

      if (unavailableDates.length > 0) {
        res
          .status(400)
          .send({ error: "Property is not available for the selected dates" });
        return;
      }

      const [newBooking] = await prisma.$transaction([
        prisma.booking.create({
          data: {
            user_id: userId,
            room_types_id: roomTypeId,
            num_of_guests: numOfGuests,
            total_price: roomType.price,
            start_date: new Date(startDate),
            end_date: new Date(endDate),
            payment_method: paymentMethod,
            status: "new",
          },
        }),
        prisma.roomTypes.update({
          where: { id: roomTypeId },
          data: {
            stock: roomType.stock - 1,
          },
        }),
      ]);

      // Respond with the created booking
      res.status(201).send({ booking: newBooking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
