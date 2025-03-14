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
exports.createBooking = createBooking;
const prisma_1 = __importDefault(require("../prisma"));
const dateUtils_1 = require("../utils/dateUtils");
function createBooking(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, roomTypeId, numOfGuests, quantity, startDate, endDate, paymentMethod, add_breakfast, } = params;
        const roomType = yield prisma_1.default.roomTypes.findUnique({
            where: { id: roomTypeId },
            include: {
                seasonal_prices: true,
            },
        });
        if (!roomType) {
            throw new Error("Room type not found");
        }
        const bookingQuantity = quantity ? Number(quantity) : 1;
        const checkInDate = new Date(startDate);
        const checkOutDate = new Date(endDate);
        const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
        let seasonalNights = 0;
        let regularNights = 0;
        let seasonalCost = 0;
        let regularCost = 0;
        for (let i = 0; i < nights; i++) {
            const currentDate = new Date(checkInDate);
            currentDate.setDate(currentDate.getDate() + i);
            let priceForNight = roomType.price;
            let isSeasonal = false;
            if (roomType.seasonal_prices && roomType.seasonal_prices.length > 0) {
                const seasonal = roomType.seasonal_prices.find((sp) => {
                    if (sp.dates && sp.dates.length > 0) {
                        const target = currentDate.toISOString().split("T")[0];
                        return sp.dates.some((d) => {
                            const dStr = new Date(d).toISOString().split("T")[0];
                            return dStr === target;
                        });
                    }
                    else if (sp.start_date && sp.end_date) {
                        const spStart = new Date(sp.start_date);
                        const spEnd = new Date(sp.end_date);
                        return currentDate >= spStart && currentDate <= spEnd;
                    }
                    return false;
                });
                if (seasonal) {
                    priceForNight = Number(seasonal.price);
                    isSeasonal = true;
                }
            }
            if (isSeasonal) {
                seasonalNights++;
                seasonalCost += priceForNight * bookingQuantity;
            }
            else {
                regularNights++;
                regularCost += priceForNight * bookingQuantity;
            }
        }
        const roomCost = seasonalCost + regularCost;
        const breakfastCost = roomType.has_breakfast && add_breakfast
            ? roomType.breakfast_price * bookingQuantity * nights
            : 0;
        const totalPrice = roomCost + breakfastCost;
        const newBooking = yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
            const bookingCreated = yield tx.booking.create({
                data: {
                    user_id: userId,
                    room_types_id: roomTypeId,
                    num_of_guests: numOfGuests,
                    quantity: bookingQuantity,
                    total_price: totalPrice,
                    start_date: checkInDate,
                    end_date: checkOutDate,
                    payment_method: paymentMethod,
                    status: "new",
                    add_breakfast: add_breakfast !== null && add_breakfast !== void 0 ? add_breakfast : false,
                },
            });
            const bookingDates = (0, dateUtils_1.getDatesBetween)(checkInDate, checkOutDate);
            for (const date of bookingDates) {
                const formattedDate = new Date(date.toISOString().split("T")[0]);
                const availability = yield tx.roomAvailability.findUnique({
                    where: {
                        uniqueRoomAvailability: {
                            room_typesId: roomTypeId,
                            date: formattedDate,
                        },
                    },
                });
                if (availability) {
                    if (availability.availableCount < bookingQuantity) {
                        throw new Error(`Not enough availability for ${formattedDate.toISOString().split("T")[0]}`);
                    }
                    const newAvailable = availability.availableCount - bookingQuantity;
                    yield tx.roomAvailability.update({
                        where: {
                            uniqueRoomAvailability: {
                                room_typesId: roomTypeId,
                                date: formattedDate,
                            },
                        },
                        data: { availableCount: newAvailable },
                    });
                    if (newAvailable === 0) {
                        const alreadyUnavailable = yield tx.unavailable.findFirst({
                            where: {
                                room_types_id: roomTypeId,
                                start_date: formattedDate,
                                end_date: formattedDate,
                            },
                        });
                        if (!alreadyUnavailable) {
                            yield tx.unavailable.create({
                                data: {
                                    room_types_id: roomTypeId,
                                    start_date: formattedDate,
                                    end_date: formattedDate,
                                },
                            });
                        }
                    }
                }
                else {
                    if (roomType.stock < bookingQuantity) {
                        throw new Error(`Not enough availability for ${formattedDate.toISOString().split("T")[0]}`);
                    }
                    const newAvailable = roomType.stock - bookingQuantity;
                    yield tx.roomAvailability.create({
                        data: {
                            room_typesId: roomTypeId,
                            date: formattedDate,
                            availableCount: newAvailable,
                        },
                    });
                    if (newAvailable === 0) {
                        yield tx.unavailable.create({
                            data: {
                                room_types_id: roomTypeId,
                                start_date: formattedDate,
                                end_date: formattedDate,
                            },
                        });
                    }
                }
            }
            return bookingCreated;
        }));
        return newBooking;
    });
}
//# sourceMappingURL=bookingService.js.map