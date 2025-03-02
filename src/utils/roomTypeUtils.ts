import prisma from "../prisma";

export async function updateRoomTypeAvgRating(
  roomTypeId: number
): Promise<number> {
  // Ambil semua review yang tidak dihapus untuk room type tertentu
  const reviews = await prisma.review.findMany({
    where: {
      room_types_id: roomTypeId,
      deleted_at: null,
    },
    select: {
      rating: true,
    },
  });

  // Hitung total rating dan rata-rata
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const avg_rating = reviews.length > 0 ? totalRating / reviews.length : 0;

  // Perbarui field avg_rating pada RoomTypes
  await prisma.roomTypes.update({
    where: { id: roomTypeId },
    data: { avg_rating },
  });

  return avg_rating;
}
