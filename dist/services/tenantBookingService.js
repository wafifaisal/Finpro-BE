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
        const whereClause = {
            room_types: {
                property: {
                    tenantId,
                },
            },
            status: status ? status : { not: "canceled" },
        };
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
    <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        background: #ffffff;
        margin: 20px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }

      .header {
        background-color: #007bff;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 22px;
        font-weight: bold;
        border-radius: 8px 8px 0 0;
      }

      .content {
        padding: 20px;
        font-size: 16px;
        color: #333333;
        line-height: 1.6;
      }

      .details-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }

      .details-table td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      .details-table td:first-child {
        font-weight: bold;
        color: #007bff;
      }

      .cta-button {
        display: inline-block;
        background-color: #F8636B;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 15px;
      }

      .cta-button:hover {
        background-color: #D53F3F;
      }

      .footer {
        text-align: center;
        padding: 15px;
        font-size: 14px;
        color: #666666;
        background: #f4f4f4;
        border-radius: 0 0 8px 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Booking Confirmation</div>
      <div class="content">
        <p>Hello <strong>${booking.user.username}</strong>,</p>
        <p>Your booking has been successfully confirmed! Here are the details:</p>

        <table class="details-table">
          <tr>
            <td>Property:</td>
            <td>${booking.room_types.property.name}</td>
          </tr>
          <tr>
            <td>Room Type:</td>
            <td>${booking.room_types.name}</td>
          </tr>
          <tr>
            <td>Total Price:</td>
            <td><strong>Rp ${booking.total_price}</strong></td>
          </tr>
          <tr>
            <td>Check-in:</td>
            <td>${(0, formatDate_1.formatDateDay)(booking.start_date)}</td>
          </tr>
          <tr>
            <td>Check-out:</td>
            <td>${(0, formatDate_1.formatDateDay)(booking.end_date)}</td>
          </tr>
        </table>

        <p>Please ensure that you follow the property’s rules. We look forward to hosting you!</p>

        <p>
          <a href="https://nginepin.vercel.app/trips" class="cta-button">View Booking</a>
        </p>

        <br />
        <p>Thank you,</p>
        <p><strong>Nginepin Team</strong></p>
      </div>
      <div class="footer">
        &copy; 2025 Nginepin. All Rights Reserved.
      </div>
    </div>
  </body>
</html>

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