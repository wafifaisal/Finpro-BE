import prisma from "../prisma";
import {
  buildPropertyFilter,
  buildRoomTypeFilter,
} from "./PropertyFilterUtils";
import {
  parsePagination,
  parseSort,
  parseTextFilters,
  parsePriceRange,
  parseGuestCount,
  parseFacilities,
  parseDates,
} from "./QueryParser";

export async function getPropertyData(query: any) {
  const { limit, page } = parsePagination(query);
  const { sortBy, sortOrder } = parseSort(query);
  const text = parseTextFilters(query);
  const { minPrice, maxPrice } = parsePriceRange(query);
  const guestCount = parseGuestCount(query);
  const { roomFacilities, propertyFacilities } = parseFacilities(query);
  const { checkIn, checkOut } = parseDates(query);
  const propFilter = buildPropertyFilter({ ...text, propertyFacilities });
  const roomFilter = buildRoomTypeFilter({
    guestCount,
    roomFacilities,
    checkIn,
    checkOut,
    minPrice,
    maxPrice,
  });
  if (Object.keys(roomFilter).length)
    propFilter.RoomTypes = { some: roomFilter };
  return { propFilter, limit, page, sortBy, sortOrder };
}

export async function buildPropertyResponse(query: any) {
  const { propFilter, limit, page, sortBy, sortOrder } = await getPropertyData(
    query
  );
  const stats = await prisma.roomTypes.aggregate({
    _min: { price: true },
    _max: { price: true },
  });
  const total = await prisma.property.count({ where: propFilter });
  const props = await prisma.property.findMany({
    where: propFilter,
    take: limit,
    skip: (page - 1) * limit,
    orderBy: { [sortBy]: sortOrder },
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
      PropertyImages: { select: { image_url: true } },
      RoomTypes: {
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
            select: { id: true, price: true, start_date: true, end_date: true },
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
  return {
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    limit,
    result: props,
    minPrice: stats._min.price,
    maxPrice: stats._max.price,
  };
}
