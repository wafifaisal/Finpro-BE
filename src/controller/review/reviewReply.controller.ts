import { Request, Response } from "express";
import prisma from "../../prisma";

export class ReviewReplyController {
  async getReviewsByTenant(req: Request, res: Response) {
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
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!tenant) {
        res.status(404).send({ error: "Tenant not found" });
        return;
      }

      const reviews = tenant.Property.flatMap((property) =>
        property.RoomTypes.flatMap((roomType) => roomType.Review)
      );

      res.status(200).send(reviews);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async createReviewReply(req: Request, res: Response) {
    const { tenantId, reviewId, reply } = req.body;

    if (!tenantId || !reviewId || !reply) {
      res
        .status(400)
        .send({ error: "Missing required fields: tenantId, reviewId, reply" });
      return;
    }

    try {
      const review = await prisma.review.findUnique({
        where: { id: parseInt(reviewId) },
        include: {
          room_types: {
            include: {
              property: true,
            },
          },
        },
      });

      if (!review || review.room_types.property.tenantId !== tenantId) {
        res.status(404).send({
          error:
            "Review not found or you do not have permission to reply to this review",
        });
        return;
      }

      const existingReply = await prisma.reviewReplies.findFirst({
        where: { review_id: parseInt(reviewId) },
      });

      if (existingReply) {
        res
          .status(400)
          .send({ error: "A reply to this review already exists" });
        return;
      }

      const reviewReply = await prisma.reviewReplies.create({
        data: {
          tenant_id: tenantId,
          review_id: parseInt(reviewId),
          reply,
        },
      });

      res.status(201).send(reviewReply);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}
