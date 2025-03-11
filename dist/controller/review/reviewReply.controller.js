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
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;
            const skip = (page - 1) * limit;
            const displayType = req.query.displayType;
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
                let reviews = tenant.Property.flatMap((property) => property.RoomTypes.flatMap((roomType) => roomType.Review.map((review) => ({
                    id: review.id,
                    rating: review.rating,
                    review: review.review,
                    user_id: review.user_id,
                    created_at: review.created_at,
                    user: {
                        name: review.user.username,
                        avatar: review.user.avatar,
                        email: review.user.email,
                    },
                    reply: review.ReviewReplies.length > 0
                        ? Object.assign({}, review.ReviewReplies[0]) : null,
                    propertyName: property.name,
                }))));
                if (displayType === "replied") {
                    reviews = reviews.filter((r) => r.reply !== null);
                }
                else if (displayType === "not_replied") {
                    reviews = reviews.filter((r) => r.reply === null);
                }
                reviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                const totalCount = reviews.length;
                const totalPages = Math.ceil(totalCount / limit);
                reviews = reviews.slice(skip, skip + limit);
                res.status(200).json({
                    reviews,
                    pagination: {
                        total: totalCount,
                        page,
                        limit,
                        totalPages,
                    },
                });
            }
            catch (error) {
                console.error("Error fetching reviews:", error);
                res.status(500).json({ message: "Internal server error" });
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
            const tenantId = req.params.tenant_id;
            if (!tenantId) {
                res.status(400).json({ error: "tenantId is required" });
                return;
            }
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
                res.status(200).json({ totalReviews, avgRating });
            }
            catch (error) {
                console.error("Error counting tenant reviews:", error);
                res.status(500).json({
                    message: error instanceof Error ? error.message : "Internal server error",
                });
            }
        });
    }
}
exports.ReviewReplyController = ReviewReplyController;
//# sourceMappingURL=reviewReply.controller.js.map