import { Request, Response } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload } from "../../services/cloudinary";

const midtransClient = require("midtrans-client");

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

  async getSnapToken(req: Request, res: Response): Promise<void> {
    try {
      const { booking_id } = req.body;
      const item_details = [];

      const booking = await prisma.booking.findUnique({
        where: { id: booking_id },
        select: {
          status: true,
          total_price: true,
          user_id: true,
          room_types: { select: { name: true, price: true } },
        },
      });

      if (!booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      if (booking.status !== "new") {
        res
          .status(400)
          .json({ error: "Booking is not in a valid state for payment" });
        return;
      }

      item_details.push({
        id: booking_id,
        price: booking.room_types.price,
        quantity: 1,
        name: booking.room_types.name,
      });

      const user = await prisma.user.findUnique({
        where: { id: booking.user_id },
      });
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MID_SERVER_KEY!,
      });

      const parameters = {
        transaction_details: {
          order_id: booking_id,
          gross_amount: booking.total_price,
        },
        customer_details: { username: user.username, email: user.email },
        item_details,
        expiry: { unit: "minutes", duration: 30 },
      };

      const transaction = await snap.createTransaction(parameters);
      res.status(200).json({ result: transaction.token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async midtransWebHook(req: Request, res: Response): Promise<void> {
    try {
      const { transaction_status, order_id } = req.body;
      let statusTransaction: "completed" | "new" | "canceled" = "new";

      if (transaction_status === "settlement") {
        statusTransaction = "completed";
      } else if (transaction_status === "cancel") {
        statusTransaction = "canceled";
      }

      await prisma.booking.update({
        where: { id: order_id },
        data: { status: statusTransaction },
      });

      res.status(200).json({ message: "Booking status updated successfully" });
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

  async getUserBookings(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;

    try {
      const bookings = await prisma.booking.findMany({
        where: {
          user_id: userId,
          status: { in: ["new", "waiting_payment", "completed"] },
        },
        include: {
          room_types: {
            select: {
              name: true,
              price: true,
              property: {
                select: {
                  name: true,
                },
              },
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

      if (bookings.length === 0) {
        res.status(404).send({ error: "No bookings found" });
        return;
      }

      res.status(200).send({ result: bookings });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async cancelBooking(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.body;

    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      if (booking.status !== "new") {
        res.status(400).json({
          error:
            "Booking cannot be canceled as it is either already paid or being processed",
        });
        return;
      }

      await prisma.$transaction([
        prisma.booking.update({
          where: { id: bookingId },
          data: { status: "canceled" },
        }),
        prisma.roomTypes.update({
          where: { id: booking.room_types_id },
          data: { stock: { increment: 1 } },
        }),
      ]);

      res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
