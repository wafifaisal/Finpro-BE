import prisma from "../prisma";
import { calculateCosts } from "../utils/bookingCalculator";

export async function getBookingDetails(bookingId: string) {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      room_types: {
        select: {
          name: true,
          price: true,
          has_breakfast: true,
          breakfast_price: true,
          RoomImages: {
            select: { image_url: true },
            take: 1,
          },
          seasonal_prices: {
            select: {
              price: true,
              start_date: true,
              end_date: true,
              dates: true,
            },
          },
        },
      },
    },
  });

  if (!booking) return null;

  return calculateCosts(booking);
}
