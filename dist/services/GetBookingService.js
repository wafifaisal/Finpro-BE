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
exports.getBookingDetails = getBookingDetails;
const prisma_1 = __importDefault(require("../prisma"));
const bookingCalculator_1 = require("../utils/bookingCalculator");
function getBookingDetails(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: bookingId },
            include: {
                room_types: {
                    select: {
                        name: true,
                        price: true,
                        has_breakfast: true,
                        breakfast_price: true,
                        RoomImages: {
                            select: { image_url: true },
                            take: 1,
                        },
                        seasonal_prices: {
                            select: {
                                price: true,
                                start_date: true,
                                end_date: true,
                                dates: true,
                            },
                        },
                    },
                },
            },
        });
        if (!booking)
            return null;
        return (0, bookingCalculator_1.calculateCosts)(booking);
    });
}
//# sourceMappingURL=GetBookingService.js.map