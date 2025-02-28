"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPropertyFilter = buildPropertyFilter;
exports.buildRoomTypeFilter = buildRoomTypeFilter;
function buildPropertyFilter(params) {
    const filter = {};
    if (params.searchWhere)
        filter.OR = [
            { name: { contains: params.searchWhere, mode: "insensitive" } },
            {
                location: {
                    city: { contains: params.searchWhere, mode: "insensitive" },
                },
            },
        ];
    if (params.propertyName) {
        filter.AND = filter.AND || [];
        filter.AND.push({
            name: { contains: params.propertyName, mode: "insensitive" },
        });
    }
    if (params.categoryFilter)
        filter.category = { equals: params.categoryFilter, mode: "insensitive" };
    if (params.locationQuery)
        filter.location = {
            city: { contains: params.locationQuery, mode: "insensitive" },
        };
    if (params.propertyFacilities && params.propertyFacilities.length > 0)
        filter.facilities = { hasSome: params.propertyFacilities };
    return filter;
}
function buildRoomTypeFilter(params) {
    var _a;
    const filter = {};
    if (params.guestCount)
        filter.capacity = { gte: params.guestCount };
    if ((_a = params.roomFacilities) === null || _a === void 0 ? void 0 : _a.length)
        filter.facilities = { hasSome: params.roomFacilities };
    if (params.checkIn) {
        const ci = new Date(params.checkIn);
        filter.Unavailable = {
            none: {
                AND: [
                    {
                        start_date: {
                            lte: params.checkOut ? new Date(params.checkOut) : ci,
                        },
                    },
                    { end_date: { gte: ci } },
                ],
            },
        };
    }
    if (params.minPrice || params.maxPrice) {
        if (params.checkIn) {
            const ci = new Date(params.checkIn), cond = [];
            if (params.minPrice)
                cond.push({
                    OR: [
                        {
                            seasonal_prices: {
                                none: {
                                    AND: [{ start_date: { lte: ci } }, { end_date: { gte: ci } }],
                                },
                            },
                            price: { gte: params.minPrice },
                        },
                        {
                            seasonal_prices: {
                                some: {
                                    AND: [
                                        { start_date: { lte: ci } },
                                        { end_date: { gte: ci } },
                                        { price: { gte: params.minPrice } },
                                    ],
                                },
                            },
                        },
                    ],
                });
            if (params.maxPrice)
                cond.push({
                    OR: [
                        {
                            seasonal_prices: {
                                none: {
                                    AND: [{ start_date: { lte: ci } }, { end_date: { gte: ci } }],
                                },
                            },
                            price: { lte: params.maxPrice },
                        },
                        {
                            seasonal_prices: {
                                some: {
                                    AND: [
                                        { start_date: { lte: ci } },
                                        { end_date: { gte: ci } },
                                        { price: { lte: params.maxPrice } },
                                    ],
                                },
                            },
                        },
                    ],
                });
            filter.AND = cond;
        }
        else {
            if (params.minPrice)
                filter.price = Object.assign(Object.assign({}, (filter.price || {})), { gte: params.minPrice });
            if (params.maxPrice)
                filter.price = Object.assign(Object.assign({}, (filter.price || {})), { lte: params.maxPrice });
        }
    }
    return filter;
}
