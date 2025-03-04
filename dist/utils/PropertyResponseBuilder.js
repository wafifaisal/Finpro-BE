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
exports.getPropertyData = getPropertyData;
exports.buildPropertyResponse = buildPropertyResponse;
const prisma_1 = __importDefault(require("../prisma"));
const PropertyFilterUtils_1 = require("./PropertyFilterUtils");
const QueryParser_1 = require("./QueryParser");
function getPropertyData(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { limit, page } = (0, QueryParser_1.parsePagination)(query);
        const { sortBy, sortOrder } = (0, QueryParser_1.parseSort)(query);
        const text = (0, QueryParser_1.parseTextFilters)(query);
        const { minPrice, maxPrice } = (0, QueryParser_1.parsePriceRange)(query);
        const guestCount = (0, QueryParser_1.parseGuestCount)(query);
        const { roomFacilities, propertyFacilities } = (0, QueryParser_1.parseFacilities)(query);
        const { checkIn, checkOut } = (0, QueryParser_1.parseDates)(query);
        const propFilter = (0, PropertyFilterUtils_1.buildPropertyFilter)(Object.assign(Object.assign({}, text), { propertyFacilities }));
        propFilter.isAvailable = true;
        const roomFilter = (0, PropertyFilterUtils_1.buildRoomTypeFilter)({
            guestCount,
            roomFacilities,
            checkIn,
            checkOut,
            minPrice,
            maxPrice,
        });
        if (Object.keys(roomFilter).length) {
            propFilter.RoomTypes = { some: roomFilter };
        }
        return { propFilter, limit, page, sortBy, sortOrder };
    });
}
function buildPropertyResponse(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { propFilter, limit, page, sortBy, sortOrder } = yield getPropertyData(query);
        if (!propFilter.RoomTypes) {
            propFilter.RoomTypes = { some: {} };
        }
        const stats = yield prisma_1.default.roomTypes.aggregate({
            _min: { price: true },
            _max: { price: true },
        });
        const total = yield prisma_1.default.property.count({ where: propFilter });
        const orderField = sortBy === "price" ? "id" : sortBy;
        const props = yield prisma_1.default.property.findMany({
            where: propFilter,
            take: limit,
            skip: (page - 1) * limit,
            orderBy: { [orderField]: sortOrder },
            select: {
                id: true,
                name: true,
                desc: true,
                category: true,
                terms_condition: true,
                click_rate: true,
                location: {
                    select: {
                        address: true,
                        city: true,
                        country: true,
                        latitude: true,
                        longitude: true,
                    },
                },
                facilities: true,
                PropertyImages: {
                    where: { deletedAt: null },
                    select: { image_url: true },
                },
                RoomTypes: {
                    where: { deletedAt: null },
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        avg_rating: true,
                        capacity: true,
                        facilities: true,
                        Unavailable: {
                            select: { id: true, start_date: true, end_date: true },
                        },
                        seasonal_prices: {
                            select: {
                                id: true,
                                price: true,
                                start_date: true,
                                end_date: true,
                                dates: true,
                            },
                        },
                        Booking: {
                            select: {
                                id: true,
                                start_date: true,
                                end_date: true,
                                total_price: true,
                                status: true,
                            },
                        },
                        Review: {
                            select: { id: true, rating: true, review: true, created_at: true },
                        },
                    },
                },
                tenant: { select: { name: true, email: true } },
                isAvailable: true,
            },
        });
        const propsWithRating = props.map((property) => {
            const roomTypes = property.RoomTypes || [];
            const allReviews = roomTypes.flatMap((rt) => rt.Review || []);
            const totalReviews = allReviews.length;
            const overallRating = totalReviews > 0
                ? allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
                : 0;
            return Object.assign(Object.assign({}, property), { overallRating,
                totalReviews });
        });
        return {
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            limit,
            result: propsWithRating,
            minPrice: stats._min.price,
            maxPrice: stats._max.price,
        };
    });
}
//# sourceMappingURL=PropertyResponseBuilder.js.map