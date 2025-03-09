"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewReplyController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ReviewReplyController {
    getReviewsByTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId } = req.params;
            try {
                const tenant = yield prisma_1.default.tenant.findUnique({
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
                const reviews = tenant.Property.flatMap((property) => property.RoomTypes.flatMap((roomType) => roomType.Review.map((review) => ({
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
                }))));
                res.status(200).json(reviews);
                return;
            }
            catch (error) {
                console.error("Error fetching reviews:", error);
                res.status(500).json({ message: "Internal server error" });
                return;
            }
        });
    }
    createReviewReply(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId, reviewId, reply } = req.body;
            if (!tenantId || !reviewId || !reply) {
                res
                    .status(400)
                    .json({ error: "Missing required fields: tenantId, reviewId, reply" });
                return;
            }
            try {
                const review = yield prisma_1.default.review.findUnique({
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
                const existingReply = yield prisma_1.default.reviewReplies.findFirst({
                    where: { review_id: reviewId },
                });
                if (existingReply) {
                    res
                        .status(400)
                        .json({ error: "A reply already exists for this review" });
                    return;
                }
                const newReply = yield prisma_1.default.reviewReplies.create({
                    data: {
                        tenant_id: tenantId,
                        review_id: reviewId,
                        reply,
                    },
                });
                res.status(201).json(newReply);
                return;
            }
            catch (error) {
                console.error("Error creating review reply:", error);
                res.status(500).json({ message: "Internal server error" });
                return;
            }
        });
    }
    countTenantReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId } = req.params;
            try {
                const result = yield prisma_1.default.review.aggregate({
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
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
}
exports.ReviewReplyController = ReviewReplyController;
//# sourceMappingURL=reviewReply.controller.js.map