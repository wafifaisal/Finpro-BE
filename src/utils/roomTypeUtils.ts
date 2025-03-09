import prisma from "../prisma";

export async function updateRoomTypeAvgRating(
  roomTypeId: number
): Promise<number> {
  const reviews = await prisma.review.findMany({
    where: {
      room_types_id: roomTypeId,
      deleted_at: null,
    },
    select: {
      rating: true,
    },
  });

  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const avg_rating = reviews.length > 0 ? totalRating / reviews.length : 0;

  await prisma.roomTypes.update({
    where: { id: roomTypeId },
    data: { avg_rating },
  });

  return avg_rating;
}
