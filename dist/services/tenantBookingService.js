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
exports.getTenantBookings = getTenantBookings;
exports.updateBookingStatus = updateBookingStatus;
exports.resendBookingConfirmation = resendBookingConfirmation;
exports.cancelTenantBooking = cancelTenantBooking;
exports.getTenantExpenditure = getTenantExpenditure;
exports.countTenantReviews = countTenantReviews;
const formatDate_1 = require("../utils/formatDate");
const prisma_1 = __importDefault(require("../prisma"));
const emailService_1 = require("./emailService");
function getTenantBookings(_a) {
    return __awaiter(this, arguments, void 0, function* ({ tenantId, status, search, page = 1, }) {
        const validStatuses = ["new", "waiting_payment", "completed"];
        if (status && !validStatuses.includes(status)) {
            throw new Error("Invalid booking status");
        }
        const itemsPerPage = 4;
        const skip = (page - 1) * itemsPerPage;
        // Build the base where clause
        const whereClause = {
            room_types: {
                property: {
                    tenantId,
                },
            },
            status: status ? status : undefined,
        };
        // If a search term is provided, add an OR condition to search both by booking id and property name
        if (search) {
            whereClause.OR = [
                { id: { startsWith: search } },
                {
                    room_types: {
                        name: { contains: search, mode: "insensitive" },
                    },
                },
            ];
        }
        const bookings = yield prisma_1.default.booking.findMany({
            where: whereClause,
            orderBy: [{ start_date: "asc" }, { end_date: "asc" }],
            take: itemsPerPage,
            skip,
            select: {
                id: true,
                num_of_guests: true,
                total_price: true,
                start_date: true,
                end_date: true,
                status: true,
                payment_proof: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    },
                },
                room_types: {
                    select: {
                        name: true,
                        price: true,
                        property: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        const totalCount = yield prisma_1.default.booking.count({
            where: whereClause,
        });
        return { bookings, totalPages: Math.ceil(totalCount / itemsPerPage) };
    });
}
function updateBookingStatus(_a) {
    return __awaiter(this, arguments, void 0, function* ({ bookingId, status, }) {
        if (!["new", "completed"].includes(status)) {
            throw new Error("Invalid status update");
        }
        yield prisma_1.default.booking.update({
            where: { id: bookingId },
            data: { status: status },
        });
    });
}
function resendBookingConfirmation(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: bookingId },
            select: {
                id: true,
                total_price: true,
                start_date: true,
                end_date: true,
                status: true,
                user: {
                    select: {
                        email: true,
                        username: true,
                    },
                },
                room_types: {
                    select: {
                        name: true,
                        property: {
                            select: { name: true },
                        },
                    },
                },
            },
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        if (booking.status !== "completed") {
            throw new Error("Booking is not completed yet");
        }
        const emailContent = `
    <h1>Booking Confirmation</h1>
    <p>Hello ${booking.user.username},</p>
    <p>Your booking has been confirmed.</p>
    <p><strong>Property:</strong> ${booking.room_types.property.name}</p>
    <p><strong>Room Type:</strong> ${booking.room_types.name}</p>
    <p><strong>Total Price:</strong> Rp ${booking.total_price}</p>
    <p><strong>Check-in:</strong> ${(0, formatDate_1.formatDateDay)(booking.start_date)}</p>
    <p><strong>Check-out:</strong> ${(0, formatDate_1.formatDateDay)(booking.end_date)}</p>
    <p>Please follow the property’s rules. We look forward to hosting you!</p>
  `;
        yield (0, emailService_1.sendEmail)(booking.user.email, "Booking Confirmation", emailContent);
    });
}
function cancelTenantBooking(_a) {
    return __awaiter(this, arguments, void 0, function* ({ bookingId, tenantId, }) {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: bookingId },
            select: {
                id: true,
                status: true,
                room_types: {
                    select: {
                        id: true,
                        property: {
                            select: {
                                tenantId: true,
                            },
                        },
                    },
                },
            },
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        if (booking.room_types.property.tenantId !== tenantId) {
            throw new Error("Unauthorized to cancel this booking");
        }
        if (booking.status !== "new") {
            throw new Error("Only 'new' bookings (unpaid) can be canceled");
        }
        yield prisma_1.default.$transaction([
            prisma_1.default.booking.update({
                where: { id: bookingId },
                data: { status: "canceled" },
            }),
            prisma_1.default.roomTypes.update({
                where: { id: booking.room_types.id },
                data: { stock: { increment: 1 } },
            }),
        ]);
    });
}
function getTenantExpenditure(tenantId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.booking.aggregate({
            _sum: {
                total_price: true,
            },
            where: {
                room_types: {
                    property: {
                        tenantId,
                    },
                },
                status: "completed",
            },
        });
        return result._sum.total_price || 0;
    });
}
function countTenantReviews(tenantId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.default.review.aggregate({
            _avg: { rating: true },
            _count: { rating: true },
            where: {
                room_types: {
                    property: {
                        tenantId,
                    },
                },
            },
        });
        return {
            totalReviews: result._count.rating,
            avgRating: result._avg.rating || 0,
        };
    });
}
//# sourceMappingURL=tenantBookingService.js.map