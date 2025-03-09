import { Request, Response } from "express";
import prisma from "../../prisma";

export class ReviewReplyController {
  async getReviewsByTenant(req: Request, res: Response): Promise<void> {
    const { tenantId } = req.params;

    try {
      const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
        include: {
          Property: {
            include: {
              RoomTypes: {
                include: {
                  Review: {
                    include: {
                      user: true,
                      ReviewReplies: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!tenant) {
        res.status(404).json({ error: "Tenant not found" });
        return;
      }

      const reviews = tenant.Property.flatMap((property) =>
        property.RoomTypes.flatMap((roomType) =>
          roomType.Review.map((review) => ({
            id: review.id,
            rating: review.rating,
            review: review.review,
            user_id: review.user_id,
            user: {
              name: review.user.username,
              avatar: review.user.avatar,
            },
            reply: review.ReviewReplies.length ? review.ReviewReplies[0] : null,
            propertyName: property.name,
          }))
        )
      );

      res.status(200).json(reviews);
      return;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  async createReviewReply(req: Request, res: Response): Promise<void> {
    const { tenantId, reviewId, reply } = req.body;

    if (!tenantId || !reviewId || !reply) {
      res
        .status(400)
        .json({ error: "Missing required fields: tenantId, reviewId, reply" });
      return;
    }

    try {
      const review = await prisma.review.findUnique({
        where: { id: reviewId },
        include: {
          room_types: {
            include: {
              property: true,
            },
          },
        },
      });

      if (!review || review.room_types.property.tenantId !== tenantId) {
        res.status(403).json({
          error: "Review not found or unauthorized to reply to this review",
        });
        return;
      }

      const existingReply = await prisma.reviewReplies.findFirst({
        where: { review_id: reviewId },
      });

      if (existingReply) {
        res
          .status(400)
          .json({ error: "A reply already exists for this review" });
        return;
      }

      const newReply = await prisma.reviewReplies.create({
        data: {
          tenant_id: tenantId,
          review_id: reviewId,
          reply,
        },
      });

      res.status(201).json(newReply);
      return;
    } catch (error) {
      console.error("Error creating review reply:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }
  async countTenantReviews(req: Request, res: Response): Promise<void> {
    const { tenantId } = req.params;
    try {
      const result = await prisma.review.aggregate({
        _avg: { rating: true },
        _count: { rating: true },
        where: {
          room_types: {
            property: {
              tenantId: tenantId,
            },
          },
        },
      });

      const totalReviews = result._count.rating;
      const avgRating = result._avg.rating || 0;

      res.status(200).send({ totalReviews, avgRating });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}
