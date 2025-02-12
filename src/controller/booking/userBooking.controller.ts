import { Request, Response } from "express";
import prisma from "../../prisma";
import multer from "multer";
import { cloudinaryUpload } from "../../services/cloudinary";

const storage = multer.memoryStorage();
const upload = multer({ storage });

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

  async getBooking(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.params;

    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
          room_types: {
            select: {
              name: true,
              price: true,
              RoomImages: {
                select: {
                  image_url: true,
                },
                take: 1,
              },
            },
          },
        },
      });

      if (!booking) {
        res.status(404).send({ error: "Booking not found" });
        return;
      }

      res.status(200).send({ result: booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async uploadPaymentProof(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.body;

    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      const { secure_url } = await cloudinaryUpload(req.file, "payment-proof");

      await prisma.booking.update({
        where: { id: bookingId },
        data: {
          payment_proof: secure_url,
          status: "waiting_payment",
        },
      });

      res.status(200).json({ message: "Payment proof uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
