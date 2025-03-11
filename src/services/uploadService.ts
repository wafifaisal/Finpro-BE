import prisma from "../prisma";
import { cloudinaryUpload } from "./cloudinary";

export async function uploadPaymentProofService(
  bookingId: string,
  file: Express.Multer.File
) {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status === "completed") {
    throw new Error("Booking is already completed.");
  }

  const { secure_url } = await cloudinaryUpload(file, "payment-proof");

  await prisma.booking.update({
    where: { id: bookingId },
    data: {
      payment_proof: secure_url,
      status: "waiting_payment",
    },
  });
}
