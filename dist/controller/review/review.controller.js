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
exports.ReviewController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const roomTypeUtils_1 = require("../../utils/roomTypeUtils");
class ReviewController {
    newReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, bookingId, rating, comment } = req.body;
            try {
                const booking = yield prisma_1.default.booking.findUnique({
                    where: { id: bookingId },
                });
                if (!booking) {
                    res.status(404).send({ error: "Booking not found" });
                    return;
                }
                const review = yield prisma_1.default.review.create({
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
                const updatedAvgRating = yield (0, roomTypeUtils_1.updateRoomTypeAvgRating)(booking.room_types_id);
                res.status(201).send({ review, updatedAvgRating });
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    getUserReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;
            const skip = (page - 1) * limit;
            const displayType = req.query.displayType;
            const where = { user_id: userId, status: "completed" };
            if (displayType === "reviewed") {
                where.Review = { some: {} };
            }
            else if (displayType === "unreviewed") {
                where.Review = { none: {} };
            }
            try {
                const bookings = yield prisma_1.default.booking.findMany({
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
                const totalCount = yield prisma_1.default.booking.count({
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
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    getBookingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bookingId } = req.params;
            try {
                const booking = yield prisma_1.default.booking.findUnique({
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
            }
            catch (error) {
                console.error("Error fetching booking:", error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getUserReviewCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            if (!userId) {
                res.status(400).json({ message: "User ID is required" });
                return;
            }
            try {
                const reviewCount = yield prisma_1.default.review.count({
                    where: { user_id: userId },
                });
                res.status(200).json({ totalReview: reviewCount });
            }
            catch (error) {
                console.error("Error fetching user review count:", error);
                res.status(500).json({
                    message: error instanceof Error ? error.message : "Internal server error",
                });
            }
        });
    }
}
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map