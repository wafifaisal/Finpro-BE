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
                const reviews = tenant.Property.flatMap((property) => property.RoomTypes.flatMap((roomType) => roomType.Review));
                res.status(200).send(reviews);
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    createReviewReply(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId, reviewId, reply } = req.body;
            if (!tenantId || !reviewId || !reply) {
                res
                    .status(400)
                    .send({ error: "Missing required fields: tenantId, reviewId, reply" });
                return;
            }
            try {
                const review = yield prisma_1.default.review.findUnique({
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
                        error: "Review not found or you do not have permission to reply to this review",
                    });
                    return;
                }
                const existingReply = yield prisma_1.default.reviewReplies.findFirst({
                    where: { review_id: parseInt(reviewId) },
                });
                if (existingReply) {
                    res
                        .status(400)
                        .send({ error: "A reply to this review already exists" });
                    return;
                }
                const reviewReply = yield prisma_1.default.reviewReplies.create({
                    data: {
                        tenant_id: tenantId,
                        review_id: parseInt(reviewId),
                        reply,
                    },
                });
                res.status(201).send(reviewReply);
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
}
exports.ReviewReplyController = ReviewReplyController;
