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
exports.getSnapTokenService = getSnapTokenService;
exports.handleMidtransWebhook = handleMidtransWebhook;
const prisma_1 = __importDefault(require("../prisma"));
const midtransClient = require("midtrans-client");
function getSnapTokenService(booking_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: booking_id },
            select: {
                quantity: true,
                status: true,
                total_price: true,
                user_id: true,
                created_at: true,
                start_date: true,
                end_date: true,
                add_breakfast: true,
                room_types: {
                    select: {
                        name: true,
                        price: true,
                        seasonal_prices: true,
                        breakfast_price: true,
                        has_breakfast: true,
                    },
                },
            },
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        if (booking.status !== "new") {
            throw new Error("Booking is not in a valid state for payment");
        }
        const bookingCreationTime = new Date(booking.created_at);
        const localBookingCreationTime = new Date(bookingCreationTime.getTime() + 60 * 60 * 1000);
        const expiryTime = new Date(localBookingCreationTime.getTime() + 30 * 60 * 1000);
        const now = new Date();
        if (now > expiryTime) {
            throw new Error("Booking has expired");
        }
        const remainingMilliseconds = expiryTime.getTime() - now.getTime();
        const remainingMinutes = Math.floor(remainingMilliseconds / (60 * 1000));
        if (!booking.start_date || !booking.end_date) {
            throw new Error("Booking dates are missing");
        }
        const startDate = new Date(booking.start_date);
        const endDate = new Date(booking.end_date);
        const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        const quantity = booking.quantity || 1;
        let regularNights = 0;
        const seasonalMap = {};
        for (let i = 0; i < nights; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + i);
            let priceForNight = booking.room_types.price;
            let isSeasonal = false;
            if (booking.room_types.seasonal_prices &&
                booking.room_types.seasonal_prices.length > 0) {
                for (const sp of booking.room_types.seasonal_prices) {
                    if (sp.dates && Array.isArray(sp.dates) && sp.dates.length > 0) {
                        const target = currentDate.toISOString().split("T")[0];
                        if (sp.dates.some((d) => d.toISOString().split("T")[0] === target)) {
                            priceForNight = Number(sp.price);
                            isSeasonal = true;
                            break;
                        }
                    }
                    else if (sp.start_date && sp.end_date) {
                        const spStart = new Date(sp.start_date);
                        const spEnd = new Date(sp.end_date);
                        if (currentDate >= spStart && currentDate <= spEnd) {
                            priceForNight = Number(sp.price);
                            isSeasonal = true;
                            break;
                        }
                    }
                }
            }
            if (isSeasonal) {
                seasonalMap[priceForNight] = (seasonalMap[priceForNight] || 0) + 1;
            }
            else {
                regularNights++;
            }
        }
        const computedRegular = regularNights * booking.room_types.price * quantity;
        let computedSeasonal = 0;
        for (const price in seasonalMap) {
            computedSeasonal += Number(price) * seasonalMap[Number(price)] * quantity;
        }
        const computedGross = computedRegular + computedSeasonal;
        const breakfastCost = booking.room_types.has_breakfast && booking.add_breakfast
            ? booking.room_types.breakfast_price * quantity * nights
            : 0;
        const finalGross = computedGross + breakfastCost;
        if (finalGross !== booking.total_price) {
            console.warn(`Computed gross (${finalGross}) does not match booking.total_price (${booking.total_price}). Using computed gross.`);
        }
        const item_details = [
            {
                id: booking_id,
                price: finalGross,
                quantity: 1,
                name: (booking.room_types.name + " Total").slice(0, 50),
            },
        ];
        const user = yield prisma_1.default.user.findUnique({
            where: { id: booking.user_id },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MID_SERVER_KEY,
        });
        const parameters = {
            transaction_details: {
                order_id: booking_id,
                gross_amount: finalGross,
            },
            customer_details: { username: user.username, email: user.email },
            item_details,
            expiry: { unit: "minutes", duration: remainingMinutes },
        };
        const transaction = yield snap.createTransaction(parameters);
        return transaction.token;
    });
}
function handleMidtransWebhook(transactionStatus, order_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let statusTransaction = "new";
        if (transactionStatus === "settlement") {
            statusTransaction = "completed";
        }
        else if (transactionStatus === "cancel") {
            statusTransaction = "canceled";
        }
        yield prisma_1.default.booking.update({
            where: { id: order_id },
            data: { status: statusTransaction },
        });
    });
}
//# sourceMappingURL=paymentService.js.map