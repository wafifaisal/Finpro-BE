import { Request, Response } from "express";
import prisma from "../../prisma";

export class ReviewController {
  async newReview(req: Request, res: Response): Promise<void> {
    const { userId, bookingId, rating, comment } = req.body;
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        res.status(404).send({ error: "Booking not found" });
        return;
      }

      const review = await prisma.review.create({
        data: {
          user_id: userId,
          booking_id: bookingId,
          rating,
          review: comment,
          room_types_id: booking.room_types_id,
        },
      });

      res.status(201).send(review);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async getUserReviews(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const bookings = await prisma.booking.findMany({
        where: { user_id: userId, status: "completed" },
        include: {
          Review: true,
          room_types: { include: { property: true, RoomImages: true } },
        },
      });

      res.status(200).send(bookings);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async deleteReview(req: Request, res: Response): Promise<void> {
    const { reviewId } = req.params;
    try {
      await prisma.review.delete({
        where: { id: +reviewId },
      });

      res.status(200).send({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async getBookingById(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.params;
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
          room_types: { include: { property: true, RoomImages: true } },
        },
      });

      if (!booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      res.status(200).json(booking);
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
