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
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const skip = (page - 1) * limit;
    const displayType = req.query.displayType as string;

    const where: any = { user_id: userId, status: "completed" };
    if (displayType === "reviewed") {
      where.Review = { some: {} };
    } else if (displayType === "unreviewed") {
      where.Review = { none: {} };
    }

    try {
      const bookings = await prisma.booking.findMany({
        where,
        orderBy: {
          created_at: "desc",
        },
        skip,
        take: limit,
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

      const totalCount = await prisma.booking.count({
        where,
      });

      res.status(200).send({
        bookings,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      });
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

  async getUserReviewCount(req: Request, res: Response): Promise<void> {
    const userId = req.params.userId;
    if (!userId) {
      res.status(400).json({ message: "User ID is required" });
      return;
    }
    try {
      const reviewCount = await prisma.review.count({
        where: { user_id: userId },
      });
      res.status(200).json({ totalReview: reviewCount });
    } catch (error) {
      console.error("Error fetching user review count:", error);
      res.status(500).json({
        message:
          error instanceof Error ? error.message : "Internal server error",
      });
    }
  }
}
