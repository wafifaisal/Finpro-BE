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
                });
                res.status(201).send(review);
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    getUserReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            try {
                const bookings = yield prisma_1.default.booking.findMany({
                    where: { user_id: userId, status: "completed" },
                    include: {
                        Review: true,
                        room_types: { include: { property: true, RoomImages: true } },
                    },
                });
                res.status(200).send(bookings);
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
    deleteReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { reviewId } = req.params;
            try {
                yield prisma_1.default.review.delete({
                    where: { id: +reviewId },
                });
                res.status(200).send({ message: "Review deleted successfully" });
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
}
exports.ReviewController = ReviewController;
