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
exports.uploadPaymentProofService = uploadPaymentProofService;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("./cloudinary");
function uploadPaymentProofService(bookingId, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: bookingId },
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        if (booking.status === "completed") {
            throw new Error("Booking is already completed.");
        }
        const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file, "payment-proof");
        yield prisma_1.default.booking.update({
            where: { id: bookingId },
            data: {
                payment_proof: secure_url,
                status: "waiting_payment",
            },
        });
    });
}
//# sourceMappingURL=uploadService.js.map