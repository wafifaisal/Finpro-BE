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

  async getReview(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.params;
    try {
      const review = await prisma.review.findFirst({
        where: { booking_id: bookingId },
      });

      if (!review) {
        res.status(404).send({ error: "Review not found" });
        return;
      }

      res.status(200).send(review);
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
}
