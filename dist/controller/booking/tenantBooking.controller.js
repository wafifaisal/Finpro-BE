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
exports.TenantBookingController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const emailService_1 = require("../../services/emailService");
const formatDate_1 = require("../../utils/formatDate");
class TenantBookingController {
    getTenantBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tenantId } = req.params;
                const { status } = req.query;
                // Validate status
                const validStatuses = ["new", "completed", "canceled", "waiting_payment"];
                if (status && !validStatuses.includes(status)) {
                    res.status(400).json({ error: "Invalid booking status" });
                    return;
                }
                // Find all bookings related to properties owned by the tenant
                const bookings = yield prisma_1.default.booking.findMany({
                    where: {
                        room_types: {
                            property: {
                                tenantId,
                            },
                        },
                        status: status ? status : undefined,
                    },
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
                res.status(200).send({ bookings });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ error: "Internal server error" });
            }
        });
    }
    updateBookingStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
                const { status } = req.body;
                if (!["new", "completed"].includes(status)) {
                    res.status(400).json({ error: "Invalid status update" });
                    return;
                }
                yield prisma_1.default.booking.update({
                    where: { id: bookingId },
                    data: { status },
                });
                res.status(200).json({ message: `Booking status updated to ${status}` });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    resendBookingConfirmation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
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
                    res.status(404).json({ error: "Booking not found" });
                    return;
                }
                if (booking.status !== "completed") {
                    res.status(400).json({ error: "Booking is not completed yet" });
                    return;
                }
                // Prepare email content
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
                res
                    .status(200)
                    .json({ message: "Confirmation email resent successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to resend email" });
            }
        });
    }
    cancelTenantBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
                const { tenantId } = req.body; // Ensure tenant ID is provided from auth middleware or request body.
                // Find booking and verify tenant ownership
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
                    res.status(404).json({ error: "Booking not found" });
                    return;
                }
                if (booking.room_types.property.tenantId !== tenantId) {
                    res.status(403).json({ error: "Unauthorized to cancel this booking" });
                    return;
                }
                if (booking.status !== "new") {
                    res.status(400).json({
                        error: "Only 'new' bookings (unpaid) can be canceled",
                    });
                    return;
                }
                // Execute cancellation within a transaction
                yield prisma_1.default.$transaction([
                    prisma_1.default.booking.update({
                        where: { id: bookingId },
                        data: { status: "canceled" },
                    }),
                    prisma_1.default.roomTypes.update({
                        where: { id: booking.room_types.id },
                        data: { stock: { increment: 1 } }, // Restore stock after cancellation
                    }),
                ]);
                res.status(200).send({ message: "Booking canceled successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ error: "Internal server error" });
            }
        });
    }
}
exports.TenantBookingController = TenantBookingController;
