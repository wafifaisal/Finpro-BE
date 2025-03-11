"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.UserBookingController = void 0;
const bookingService = __importStar(require("../../services/bookingService"));
const paymentService = __importStar(require("../../services/paymentService"));
const uploadService = __importStar(require("../../services/uploadService"));
const prisma_1 = __importDefault(require("../../prisma"));
const GetBookingService_1 = require("../../services/GetBookingService");
const dateUtils_1 = require("../../utils/dateUtils");
const reminderService_1 = require("../../services/reminderService");
class UserBookingController {
    newBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, roomTypeId, numOfGuests, quantity, startDate, endDate, paymentMethod, add_breakfast, } = req.body;
                const newBooking = yield bookingService.createBooking({
                    userId,
                    roomTypeId,
                    numOfGuests,
                    quantity,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    paymentMethod,
                    add_breakfast,
                });
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (new Date(startDate).toDateString() === today.toDateString()) {
                    console.log("📩 Sending immediate reminder...");
                    yield (0, reminderService_1.sendBookingReminder)(newBooking.id);
                }
                res.status(201).send({ booking: newBooking });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
    getBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bookingId } = req.params;
            try {
                const bookingWithCosts = yield (0, GetBookingService_1.getBookingDetails)(bookingId);
                if (!bookingWithCosts) {
                    res.status(404).send({ error: "Booking not found" });
                    return;
                }
                res.status(200).send({ result: bookingWithCosts });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    getSnapToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { booking_id } = req.body;
                const token = yield paymentService.getSnapTokenService(booking_id);
                res.status(200).json({ result: token });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
    midtransWebHook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                yield paymentService.handleMidtransWebhook(transaction_status, order_id);
                res.status(200).json({ message: "Booking status updated successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    uploadPaymentProof(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bookingId } = req.body;
            if (!req.file) {
                res.status(400).json({ error: "No file uploaded" });
                return;
            }
            try {
                yield uploadService.uploadPaymentProofService(bookingId, req.file);
                res.status(200).json({ message: "Payment proof uploaded successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
    getUserBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 4;
            const skip = (page - 1) * limit;
            const search = req.query.search;
            const status = req.query.status;
            if (!userId) {
                res.status(400).json({ message: "User ID is missing" });
                return;
            }
            const checkInFilter = req.query.checkIn;
            const checkOutFilter = req.query.checkOut;
            const reservationNo = req.query.reservationNo;
            try {
                const whereClause = Object.assign({ user_id: userId }, (status
                    ? { status }
                    : { status: { in: ["new", "waiting_payment", "completed"] } }));
                if (search) {
                    whereClause.room_types = {
                        property: {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    };
                }
                if (checkInFilter) {
                    whereClause.start_date = { gte: new Date(checkInFilter) };
                }
                if (checkOutFilter) {
                    whereClause.end_date = { lte: new Date(checkOutFilter) };
                }
                if (reservationNo) {
                    whereClause.id = { startsWith: reservationNo };
                }
                const totalCount = yield prisma_1.default.booking.count({ where: whereClause });
                const bookings = yield prisma_1.default.booking.findMany({
                    where: whereClause,
                    orderBy: {
                        created_at: "desc",
                    },
                    skip,
                    take: limit,
                    select: {
                        id: true,
                        quantity: true,
                        num_of_guests: true,
                        total_price: true,
                        details: true,
                        start_date: true,
                        end_date: true,
                        created_at: true,
                        updated_at: true,
                        payment_proof: true,
                        payment_method: true,
                        status: true,
                        user_id: true,
                        room_types_id: true,
                        add_breakfast: true,
                        room_types: {
                            select: {
                                name: true,
                                price: true,
                                has_breakfast: true,
                                breakfast_price: true,
                                seasonal_prices: {
                                    select: {
                                        id: true,
                                        price: true,
                                        start_date: true,
                                        end_date: true,
                                        dates: true,
                                        apply_weekend: true,
                                        apply_holiday: true,
                                        created_at: true,
                                        updated_at: true,
                                    },
                                },
                                property: {
                                    select: {
                                        name: true,
                                    },
                                },
                                RoomImages: {
                                    select: {
                                        image_url: true,
                                    },
                                    take: 1,
                                },
                            },
                        },
                        Review: true,
                    },
                });
                res.status(200).send({ result: bookings, totalCount });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    cancelBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bookingId } = req.body;
            try {
                const booking = yield prisma_1.default.booking.findUnique({
                    where: { id: bookingId },
                });
                if (!booking) {
                    res.status(404).json({ error: "Booking not found" });
                    return;
                }
                if (booking.status !== "new") {
                    res.status(400).json({
                        error: "Booking cannot be canceled as it is either already paid or being processed",
                    });
                    return;
                }
                yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    yield tx.booking.update({
                        where: { id: bookingId },
                        data: { status: "canceled" },
                    });
                    const bookingDates = (0, dateUtils_1.getDatesBetween)(new Date(booking.start_date), new Date(booking.end_date));
                    for (const date of bookingDates) {
                        const formattedDate = new Date(date.toISOString().split("T")[0]);
                        const availability = yield tx.roomAvailability.findUnique({
                            where: {
                                uniqueRoomAvailability: {
                                    room_typesId: booking.room_types_id,
                                    date: formattedDate,
                                },
                            },
                        });
                        if (availability) {
                            yield tx.roomAvailability.update({
                                where: {
                                    uniqueRoomAvailability: {
                                        room_typesId: booking.room_types_id,
                                        date: formattedDate,
                                    },
                                },
                                data: { availableCount: { increment: booking.quantity } },
                            });
                            const updatedAvailability = yield tx.roomAvailability.findUnique({
                                where: {
                                    uniqueRoomAvailability: {
                                        room_typesId: booking.room_types_id,
                                        date: formattedDate,
                                    },
                                },
                            });
                            if (updatedAvailability && updatedAvailability.availableCount > 0) {
                                yield tx.unavailable.deleteMany({
                                    where: {
                                        room_types_id: booking.room_types_id,
                                        start_date: formattedDate,
                                        end_date: formattedDate,
                                    },
                                });
                            }
                        }
                        else {
                            yield tx.roomAvailability.create({
                                data: {
                                    room_typesId: booking.room_types_id,
                                    date: formattedDate,
                                    availableCount: booking.quantity,
                                },
                            });
                        }
                    }
                }));
                res.status(200).json({ message: "Booking canceled successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    getUserBookingCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(400).json({ message: "User ID is required" });
                    return;
                }
                const totalBooking = yield prisma_1.default.booking.count({
                    where: { user_id: userId },
                });
                res.status(200).json({ totalBooking });
            }
            catch (err) {
                console.error("Error fetching booking user count:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getUserTotalExpenditure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                res.status(400).json({ message: "User ID is required" });
                return;
            }
            try {
                const totalExpenditure = yield prisma_1.default.booking.aggregate({
                    _sum: { total_price: true },
                    where: {
                        user_id: userId,
                        status: "completed",
                    },
                });
                res.status(200).json({
                    totalExpenditure: totalExpenditure._sum.total_price || 0,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    error: error.message || "Internal server error",
                });
            }
        });
    }
}
exports.UserBookingController = UserBookingController;
//# sourceMappingURL=userBooking.controller.js.map