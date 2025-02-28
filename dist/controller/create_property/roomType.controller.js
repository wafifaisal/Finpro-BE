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
exports.CreateRoomTypeController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const ImageServices_1 = require("../../services/ImageServices");
const ParseUtils_1 = require("../../utils/ParseUtils");
const computeRecurringDates_1 = require("../../services/computeRecurringDates");
class CreateRoomTypeController {
    createRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imgs = yield (0, ImageServices_1.uploadImages)(req.files, "room");
                const pid = parseInt(req.params.property_id, 10);
                if (isNaN(pid)) {
                    res.status(400).json({ message: "Property ID must be a valid number" });
                    return;
                }
                const { name, stock, price, capacity, bed_details, has_breakfast, breakfast_price, facilities, seasonal_prices, unavailable, } = req.body;
                const facs = (0, ParseUtils_1.parseFacilities)(facilities);
                const seas = (0, ParseUtils_1.parseSeasonalPrices)(seasonal_prices);
                const unav = (0, ParseUtils_1.parseUnavailable)(unavailable);
                const seasonalPricesData = [];
                seas.forEach((sp) => {
                    if ((sp.apply_weekend || sp.apply_holiday) &&
                        sp.start_date &&
                        sp.end_date) {
                        const computedDatesISO = (0, computeRecurringDates_1.computeRecurringDates)(sp.start_date, sp.end_date, !!sp.apply_weekend, !!sp.apply_holiday);
                        if (computedDatesISO.length > 0) {
                            const computedDates = computedDatesISO.map((d) => new Date(d));
                            seasonalPricesData.push({
                                price: parseFloat(sp.price),
                                start_date: computedDates[0],
                                end_date: computedDates[computedDates.length - 1],
                                apply_weekend: !!sp.apply_weekend,
                                apply_holiday: !!sp.apply_holiday,
                                dates: computedDates,
                            });
                            return;
                        }
                    }
                    seasonalPricesData.push({
                        price: parseFloat(sp.price),
                        start_date: new Date(sp.start_date),
                        end_date: new Date(sp.end_date),
                        apply_weekend: !!sp.apply_weekend,
                        apply_holiday: !!sp.apply_holiday,
                        dates: sp.dates && Array.isArray(sp.dates)
                            ? sp.dates
                                .map((d) => new Date(d))
                                .filter((d) => !isNaN(d.getTime()))
                            : [],
                    });
                });
                const room = yield prisma_1.default.roomTypes.create({
                    data: {
                        name,
                        stock: parseInt(stock, 10),
                        price: parseInt(price, 10),
                        capacity: parseInt(capacity, 10),
                        bed_details,
                        has_breakfast: has_breakfast === "true" || has_breakfast === true,
                        breakfast_price: parseInt(breakfast_price, 10),
                        property: { connect: { id: pid } },
                        RoomImages: { create: imgs },
                        facilities: facs,
                        seasonal_prices: { create: seasonalPricesData },
                        Unavailable: {
                            create: unav.map((u) => ({
                                start_date: new Date(u.start_date),
                                end_date: new Date(u.end_date),
                            })),
                        },
                    },
                });
                res.status(201).json(room);
            }
            catch (err) {
                res.status(400).json(err);
            }
        });
    }
    editRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.roomtype_id);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid room type ID" });
                    return;
                }
                const imgs = req.files && Array.isArray(req.files) && req.files.length
                    ? yield (0, ImageServices_1.uploadImages)(req.files, "room")
                    : null;
                const facs = req.body.facilities
                    ? (0, ParseUtils_1.parseFacilities)(req.body.facilities)
                    : null;
                const { name, stock, price, capacity, bed_details, has_breakfast, breakfast_price, seasonal_prices, unavailable, } = req.body;
                let data = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { name })), (stock && { stock: parseInt(stock, 10) })), (price && { price: parseInt(price, 10) })), (capacity && { capacity: parseInt(capacity, 10) })), (bed_details && { bed_details })), (typeof has_breakfast !== "undefined" && {
                    has_breakfast: has_breakfast === "true" || has_breakfast === true,
                })), (breakfast_price && {
                    breakfast_price: parseInt(breakfast_price, 10),
                })), (facs && { facilities: facs }));
                if (imgs) {
                    yield prisma_1.default.roomImages.deleteMany({ where: { room_types_id: id } });
                    data.RoomImages = { create: imgs };
                }
                if (seasonal_prices) {
                    const seas = (0, ParseUtils_1.parseSeasonalPrices)(seasonal_prices);
                    yield prisma_1.default.seasonal_prices.deleteMany({
                        where: { room_typesId: id },
                    });
                    const seasonalPricesData = [];
                    seas.forEach((sp) => {
                        if ((sp.apply_weekend || sp.apply_holiday) &&
                            sp.start_date &&
                            sp.end_date) {
                            const computedDatesISO = (0, computeRecurringDates_1.computeRecurringDates)(sp.start_date, sp.end_date, !!sp.apply_weekend, !!sp.apply_holiday);
                            if (computedDatesISO.length > 0) {
                                const computedDates = computedDatesISO.map((d) => new Date(d));
                                seasonalPricesData.push({
                                    price: parseFloat(sp.price),
                                    start_date: computedDates[0],
                                    end_date: computedDates[computedDates.length - 1],
                                    apply_weekend: !!sp.apply_weekend,
                                    apply_holiday: !!sp.apply_holiday,
                                    dates: computedDates,
                                });
                                return;
                            }
                        }
                        seasonalPricesData.push({
                            price: parseFloat(sp.price),
                            start_date: new Date(sp.start_date),
                            end_date: new Date(sp.end_date),
                            apply_weekend: !!sp.apply_weekend,
                            apply_holiday: !!sp.apply_holiday,
                            dates: sp.dates && Array.isArray(sp.dates)
                                ? sp.dates
                                    .map((d) => new Date(d))
                                    .filter((d) => !isNaN(d.getTime()))
                                : [],
                        });
                    });
                    data.seasonal_prices = { create: seasonalPricesData };
                }
                if (unavailable) {
                    const unav = (0, ParseUtils_1.parseUnavailable)(unavailable);
                    yield prisma_1.default.unavailable.deleteMany({ where: { room_types_id: id } });
                    data.Unavailable = {
                        create: unav.map((u) => ({
                            start_date: new Date(u.start_date),
                            end_date: new Date(u.end_date),
                        })),
                    };
                }
                const upd = yield prisma_1.default.roomTypes.update({ where: { id }, data });
                res
                    .status(200)
                    .json({ message: "Room type updated successfully", room: upd });
            }
            catch (err) {
                res.status(400).json(err);
            }
        });
    }
    deleteRoomType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.roomtype_id);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid room type ID" });
                    return;
                }
                const room = yield prisma_1.default.roomTypes.findUnique({ where: { id } });
                if (!room) {
                    res.status(404).json({ message: "Room type not found" });
                    return;
                }
                const activeBooking = yield prisma_1.default.booking.findFirst({
                    where: {
                        room_types_id: id,
                        status: { notIn: ["canceled", "completed"] },
                    },
                });
                if (activeBooking) {
                    res.status(400).json({
                        message: "Jenis kamar tidak dapat dihapus karena ada pemesanan aktif terkait.",
                    });
                    return;
                }
                yield prisma_1.default.roomTypes.update({
                    where: { id },
                    data: { deletedAt: new Date() },
                });
                res.status(200).json({ message: "Room type deleted successfully" });
            }
            catch (err) {
                console.error(err);
                res.status(400).json(err);
            }
        });
    }
}
exports.CreateRoomTypeController = CreateRoomTypeController;
