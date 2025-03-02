import { Request, Response } from "express";
import prisma from "../../prisma";
import { updateRoomTypeAvgRating } from "../../utils/roomTypeUtils";

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
        include: {
          user: {
            select: {
              avatar: true,
              username: true,
              email: true,
            },
          },
        },
      });

      const updatedAvgRating = await updateRoomTypeAvgRating(
        booking.room_types_id
      );

      res.status(201).send({ review, updatedAvgRating });
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
          Review: {
            include: {
              user: {
                select: {
                  avatar: true,
                  username: true,
                  email: true,
                },
              },
            },
          },
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

  async getUserReviewCount(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    try {
      const reviewCount = await prisma.review.count({
        where: { user_id: userId },
      });
      res.status(200).json({ totalReview: reviewCount });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}
