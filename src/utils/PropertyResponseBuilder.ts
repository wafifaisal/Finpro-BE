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
  propFilter.isAvailable = true;

  const roomFilter = buildRoomTypeFilter({
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
}

export async function buildPropertyResponse(query: any) {
  const { propFilter, limit, page, sortBy, sortOrder } = await getPropertyData(
    query
  );

  if (!propFilter.RoomTypes) {
    propFilter.RoomTypes = { some: {} };
  }

  const stats = await prisma.roomTypes.aggregate({
    _min: { price: true },
    _max: { price: true },
  });
  const total = await prisma.property.count({ where: propFilter });
  const orderField = sortBy === "price" ? "id" : sortBy;
  const props = await prisma.property.findMany({
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
    const overallRating =
      totalReviews > 0
        ? allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
        : 0;
    return {
      ...property,
      overallRating,
      totalReviews,
    };
  });

  return {
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    limit,
    result: propsWithRating,
    minPrice: stats._min.price,
    maxPrice: stats._max.price,
  };
}
