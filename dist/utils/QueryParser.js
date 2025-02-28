"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePagination = parsePagination;
exports.parseSort = parseSort;
exports.parseTextFilters = parseTextFilters;
exports.parsePriceRange = parsePriceRange;
exports.parseGuestCount = parseGuestCount;
exports.parseFacilities = parseFacilities;
exports.parseDates = parseDates;
function parsePagination(query) {
    const limit = parseInt(query.limit) || 9;
    const page = parseInt(query.page) || 1;
    return { limit, page };
}
function parseSort(query) {
    const sortBy = query.sortBy || "name";
    const sortOrder = query.sortOrder || "asc";
    return { sortBy, sortOrder };
}
function parseTextFilters(query) {
    return {
        searchWhere: query.where,
        propertyName: query.propertyName,
        categoryFilter: query.category,
        locationQuery: query.location,
    };
}
function parsePriceRange(query) {
    const minPrice = query.minPrice ? parseFloat(query.minPrice) : null;
    const maxPrice = query.maxPrice ? parseFloat(query.maxPrice) : null;
    return { minPrice, maxPrice };
}
function parseGuestCount(query) {
    const guestCountStr = query.who;
    return guestCountStr ? parseInt(guestCountStr, 10) : null;
}
function parseFacilities(query) {
    const roomFacilities = query.roomFacilities
        ? query.roomFacilities.split(",").map((f) => f.trim())
        : null;
    const propertyFacilities = query.propertyFacilities
        ? query.propertyFacilities.split(",").map((f) => f.trim())
        : null;
    return { roomFacilities, propertyFacilities };
}
function parseDates(query) {
    return {
        checkIn: query.checkIn,
        checkOut: query.checkOut,
    };
}
