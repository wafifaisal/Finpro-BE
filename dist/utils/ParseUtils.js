"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLocation = parseLocation;
exports.parseLocationUpdate = parseLocationUpdate;
exports.parseFacilities = parseFacilities;
exports.parseSeasonalPrices = parseSeasonalPrices;
exports.parseUnavailable = parseUnavailable;
function parseLocation(location) {
    if (typeof location === "string")
        location = JSON.parse(location);
    if (typeof location === "string" && !isNaN(Number(location)))
        return { connect: { id: Number(location) } };
    if (typeof location === "object" && location.address) {
        const { address, country, city, longitude, latitude } = location;
        if (!address || !country || !city)
            throw { message: "Missing required location fields" };
        return {
            create: {
                address,
                country,
                city,
                longitude: Number(longitude),
                latitude: Number(latitude),
            },
        };
    }
    throw { message: "Invalid location data" };
}
function parseLocationUpdate(location) {
    if (typeof location === "string")
        location = JSON.parse(location);
    if (typeof location === "string" && !isNaN(Number(location)))
        return { connect: { id: Number(location) } };
    if (typeof location === "object" && location.address) {
        const { address, country, city, longitude, latitude } = location;
        if (!address || !country || !city)
            throw { message: "Missing required location fields" };
        return {
            update: {
                address,
                country,
                city,
                longitude: Number(longitude),
                latitude: Number(latitude),
            },
        };
    }
    throw { message: "Invalid location data" };
}
function parseFacilities(facilities) {
    if (!facilities)
        return [];
    let arr;
    if (typeof facilities === "string") {
        try {
            arr = JSON.parse(facilities);
        }
        catch (_a) {
            arr = facilities.split(",");
        }
    }
    else if (Array.isArray(facilities)) {
        arr = facilities;
    }
    return Array.isArray(arr) && arr.length
        ? arr.map((f) => f.toString().trim().toUpperCase())
        : [];
}
function parseSeasonalPrices(seasonal) {
    if (!seasonal)
        return [];
    try {
        const parsed = JSON.parse(seasonal);
        return parsed.map((sp) => (Object.assign(Object.assign({}, sp), { dates: sp.dates || [] })));
    }
    catch (_a) {
        return [];
    }
}
function parseUnavailable(unavailable) {
    if (!unavailable)
        return [];
    try {
        return JSON.parse(unavailable);
    }
    catch (_a) {
        return [];
    }
}
