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
exports.PropertyController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const PropertyResponseBuilder_1 = require("../../utils/PropertyResponseBuilder");
class PropertyController {
    getProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, PropertyResponseBuilder_1.buildPropertyResponse)(Object.assign(Object.assign({}, req.query), { isAvailable: true }));
                res.status(200).json(response);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Error retrieving properties" });
            }
        });
    }
    GetPropertyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid property ID" });
                    return;
                }
                const prop = yield prisma_1.default.property.findFirst({
                    where: { id, isAvailable: true },
                    include: {
                        location: true,
                        tenant: true,
                        PropertyImages: {
                            where: { deletedAt: null },
                        },
                        RoomTypes: {
                            where: { deletedAt: null },
                            include: {
                                RoomImages: {
                                    where: { deletedAt: null },
                                },
                                Unavailable: true,
                                seasonal_prices: true,
                                Booking: true,
                                Review: {
                                    include: {
                                        user: {
                                            select: {
                                                avatar: true,
                                                username: true,
                                                email: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                if (!prop) {
                    res.status(404).json({ message: "Property not found" });
                    return;
                }
                const roomTypesWithRating = prop.RoomTypes.map((rt) => {
                    const reviewCount = rt.Review.length;
                    const totalRating = rt.Review.reduce((sum, review) => sum + review.rating, 0);
                    const avg_rating = reviewCount > 0 ? totalRating / reviewCount : 0;
                    return Object.assign(Object.assign({}, rt), { avg_rating,
                        reviewCount });
                });
                const allReviews = prop.RoomTypes.flatMap((rt) => rt.Review);
                const totalReviews = allReviews.length;
                const overallTotalRating = allReviews.reduce((sum, review) => sum + review.rating, 0);
                const overallRating = totalReviews > 0 ? overallTotalRating / totalReviews : 0;
                const response = Object.assign(Object.assign({}, prop), { overallRating,
                    totalReviews, RoomTypes: roomTypesWithRating });
                res.status(200).json(response);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getPropertySuggestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.query.name;
                if (!(name === null || name === void 0 ? void 0 : name.trim())) {
                    res.status(400).json({ suggestions: [] });
                    return;
                }
                const props = yield prisma_1.default.property.findMany({
                    where: {
                        name: { contains: name, mode: "insensitive" },
                        isAvailable: true,
                    },
                    select: { name: true },
                    take: 5,
                });
                res.status(200).json({ suggestions: props.map((p) => p.name) });
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ suggestions: [] });
            }
        });
    }
    getRoomTypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const propertyId = parseInt(req.params.property_id, 10);
                const roomTypeId = parseInt(req.params.roomtype_id, 10);
                if (isNaN(propertyId) || isNaN(roomTypeId)) {
                    res.status(400).json({ message: "IDs must be valid numbers" });
                    return;
                }
                const rt = yield prisma_1.default.roomTypes.findFirst({
                    where: { id: roomTypeId, deletedAt: null },
                    include: {
                        RoomImages: { where: { deletedAt: null } },
                        Unavailable: true,
                        seasonal_prices: true,
                        Booking: true,
                        Review: {
                            include: {
                                user: {
                                    select: {
                                        avatar: true,
                                        username: true,
                                        email: true,
                                    },
                                },
                            },
                        },
                    },
                });
                if (!rt) {
                    res.status(404).json({ message: "Room type not found" });
                    return;
                }
                if (rt.property_id !== propertyId) {
                    res
                        .status(400)
                        .json({ message: "Room type does not belong to given property" });
                    return;
                }
                const imagePreviews = rt.RoomImages.map((img) => img.image_url);
                const unavailable = rt.Unavailable.map((u) => ({
                    id: u.id,
                    start_date: u.start_date,
                    end_date: u.end_date,
                }));
                const reviewCount = rt.Review.length;
                const totalRating = rt.Review.reduce((sum, review) => sum + review.rating, 0);
                const avg_rating = reviewCount > 0 ? totalRating / reviewCount : 0;
                res.status(200).json({
                    roomType: Object.assign(Object.assign({}, rt), { avg_rating,
                        reviewCount,
                        imagePreviews,
                        unavailable }),
                });
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Error retrieving room type" });
            }
        });
    }
    incrementClickRate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const propertyId = parseInt(req.query.id, 10);
            if (isNaN(propertyId)) {
                res.status(400).json({ message: "Invalid property id" });
                return;
            }
            try {
                yield prisma_1.default.property.update({
                    where: { id: propertyId },
                    data: { click_rate: { increment: 1 } },
                });
                res.status(200).json({ message: "Click rate incremented" });
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getPropertyCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield prisma_1.default.property.count({
                    where: { isAvailable: true },
                });
                res.status(200).json({ count });
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    getRoomTypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { roomId } = req.params;
                const id = parseInt(roomId, 10);
                if (isNaN(id)) {
                    res.status(400).json({ error: "Invalid room ID" });
                    return;
                }
                const room = yield prisma_1.default.roomTypes.findFirst({
                    where: { id, deletedAt: null },
                    include: {
                        RoomImages: { where: { deletedAt: null } },
                        RoomAvailability: true,
                        seasonal_prices: true,
                    },
                });
                if (!room) {
                    res.status(404).json({ error: "Room not found" });
                    return;
                }
                res.status(200).json(room);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    getTenantPropertyCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tenantId } = req.params;
                if (!tenantId) {
                    res.status(400).json({ message: "Tenant ID is required" });
                    return;
                }
                const totalProperties = yield prisma_1.default.property.count({
                    where: { tenantId, isAvailable: true },
                });
                res.status(200).json({ totalProperties });
            }
            catch (e) {
                console.error("Error fetching tenant property count:", e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.PropertyController = PropertyController;
//# sourceMappingURL=property.controller.js.map