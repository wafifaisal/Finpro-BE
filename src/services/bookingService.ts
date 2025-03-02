import prisma from "../prisma";
import { getDatesBetween } from "../utils/dateUtils";

interface CreateBookingParams {
  userId: string;
  roomTypeId: number;
  numOfGuests: number;
  quantity?: number;
  startDate: Date;
  endDate: Date;
  paymentMethod: "Manual" | "Midtrans";
  add_breakfast?: boolean;
}

export async function createBooking(params: CreateBookingParams) {
  const {
    userId,
    roomTypeId,
    numOfGuests,
    quantity,
    startDate,
    endDate,
    paymentMethod,
    add_breakfast,
  } = params;

  const roomType = await prisma.roomTypes.findUnique({
    where: { id: roomTypeId },
    include: {
      seasonal_prices: true,
    },
  });
  if (!roomType) {
    throw new Error("Room type not found");
  }

  const bookingQuantity = quantity ? Number(quantity) : 1;
  const checkInDate = new Date(startDate);
  const checkOutDate = new Date(endDate);
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Perhitungan harga kamar per malam (menggunakan harga seasonal jika berlaku)
  let seasonalNights = 0;
  let regularNights = 0;
  let seasonalCost = 0;
  let regularCost = 0;

  for (let i = 0; i < nights; i++) {
    const currentDate = new Date(checkInDate);
    currentDate.setDate(currentDate.getDate() + i);
    let priceForNight = roomType.price;
    let isSeasonal = false;

    if (roomType.seasonal_prices && roomType.seasonal_prices.length > 0) {
      // Cari apakah tanggal saat ini termasuk dalam harga seasonal
      const seasonal = roomType.seasonal_prices.find((sp: any) => {
        if (sp.dates && sp.dates.length > 0) {
          const target = currentDate.toISOString().split("T")[0];
          return sp.dates.some((d: string) => {
            const dStr = new Date(d).toISOString().split("T")[0];
            return dStr === target;
          });
        } else if (sp.start_date && sp.end_date) {
          const spStart = new Date(sp.start_date);
          const spEnd = new Date(sp.end_date);
          return currentDate >= spStart && currentDate <= spEnd;
        }
        return false;
      });

      if (seasonal) {
        priceForNight = Number(seasonal.price);
        isSeasonal = true;
      }
    }

    if (isSeasonal) {
      seasonalNights++;
      seasonalCost += priceForNight * bookingQuantity;
    } else {
      regularNights++;
      regularCost += priceForNight * bookingQuantity;
    }
  }

  const roomCost = seasonalCost + regularCost;
  const breakfastCost =
    roomType.has_breakfast && add_breakfast
      ? roomType.breakfast_price * bookingQuantity * nights
      : 0;
  const totalPrice = roomCost + breakfastCost;

  // Pembuatan booking beserta update ketersediaan kamar
  const newBooking = await prisma.$transaction(async (tx) => {
    const bookingCreated = await tx.booking.create({
      data: {
        user_id: userId,
        room_types_id: roomTypeId,
        num_of_guests: numOfGuests,
        quantity: bookingQuantity,
        total_price: totalPrice,
        start_date: checkInDate,
        end_date: checkOutDate,
        payment_method: paymentMethod,
        status: "new",
        add_breakfast: add_breakfast ?? false,
      },
    });

    const bookingDates = getDatesBetween(checkInDate, checkOutDate);

    for (const date of bookingDates) {
      const formattedDate = new Date(date.toISOString().split("T")[0]);
      const availability = await tx.roomAvailability.findUnique({
        where: {
          uniqueRoomAvailability: {
            room_typesId: roomTypeId,
            date: formattedDate,
          },
        },
      });

      if (availability) {
        if (availability.availableCount < bookingQuantity) {
          throw new Error(
            `Not enough availability for ${
              formattedDate.toISOString().split("T")[0]
            }`
          );
        }
        const newAvailable = availability.availableCount - bookingQuantity;
        await tx.roomAvailability.update({
          where: {
            uniqueRoomAvailability: {
              room_typesId: roomTypeId,
              date: formattedDate,
            },
          },
          data: { availableCount: newAvailable },
        });
        if (newAvailable === 0) {
          const alreadyUnavailable = await tx.unavailable.findFirst({
            where: {
              room_types_id: roomTypeId,
              start_date: formattedDate,
              end_date: formattedDate,
            },
          });
          if (!alreadyUnavailable) {
            await tx.unavailable.create({
              data: {
                room_types_id: roomTypeId,
                start_date: formattedDate,
                end_date: formattedDate,
              },
            });
          }
        }
      } else {
        if (roomType.stock < bookingQuantity) {
          throw new Error(
            `Not enough availability for ${
              formattedDate.toISOString().split("T")[0]
            }`
          );
        }
        const newAvailable = roomType.stock - bookingQuantity;
        await tx.roomAvailability.create({
          data: {
            room_typesId: roomTypeId,
            date: formattedDate,
            availableCount: newAvailable,
          },
        });
        if (newAvailable === 0) {
          await tx.unavailable.create({
            data: {
              room_types_id: roomTypeId,
              start_date: formattedDate,
              end_date: formattedDate,
            },
          });
        }
      }
    }

    return bookingCreated;
  });

  return newBooking;
}
