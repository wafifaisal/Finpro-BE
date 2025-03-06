import { ParsedQs } from "qs";

export function parsePagination(query: ParsedQs) {
  const limit = parseInt(query.limit as string) || 40;
  const page = parseInt(query.page as string) || 1;
  return { limit, page };
}

export function parseSort(query: ParsedQs) {
  const sortBy = (query.sortBy as string) || "name";
  const sortOrder = (query.sortOrder as string) || "asc";
  return { sortBy, sortOrder };
}

export function parseTextFilters(query: ParsedQs) {
  return {
    searchWhere: query.where as string,
    propertyName: query.propertyName as string,
    categoryFilter: query.category as string,
    locationQuery: query.location as string,
  };
}

export function parsePriceRange(query: ParsedQs) {
  const minPrice = query.minPrice ? parseFloat(query.minPrice as string) : null;
  const maxPrice = query.maxPrice ? parseFloat(query.maxPrice as string) : null;
  return { minPrice, maxPrice };
}

export function parseGuestCount(query: ParsedQs) {
  const guestCountStr = query.who as string;
  return guestCountStr ? parseInt(guestCountStr, 10) : null;
}

export function parseFacilities(query: ParsedQs) {
  const roomFacilities = query.roomFacilities
    ? (query.roomFacilities as string).split(",").map((f) => f.trim())
    : null;
  const propertyFacilities = query.propertyFacilities
    ? (query.propertyFacilities as string).split(",").map((f) => f.trim())
    : null;
  return { roomFacilities, propertyFacilities };
}

export function parseDates(query: ParsedQs) {
  return {
    checkIn: query.checkIn as string,
    checkOut: query.checkOut as string,
  };
}
