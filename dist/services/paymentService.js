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
// src/services/paymentService.ts
const prisma_1 = __importDefault(require("../prisma"));
const midtransClient = require("midtrans-client");
function getSnapTokenService(booking_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const item_details = [];
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: booking_id },
            select: {
                status: true,
                total_price: true,
                user_id: true,
                room_types: { select: { name: true, price: true } },
            },
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        if (booking.status !== "new") {
            throw new Error("Booking is not in a valid state for payment");
        }
        item_details.push({
            id: booking_id,
            price: booking.room_types.price,
            quantity: 1,
            name: booking.room_types.name,
        });
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
                gross_amount: booking.total_price,
            },
            customer_details: { username: user.username, email: user.email },
            item_details,
            expiry: { unit: "minutes", duration: 30 },
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
