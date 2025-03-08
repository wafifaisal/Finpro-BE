import prisma from "../prisma";
const midtransClient = require("midtrans-client");

export async function getSnapTokenService(booking_id: string) {
  const item_details: any[] = [];

  const booking = await prisma.booking.findUnique({
    where: { id: booking_id },
    select: {
      status: true,
      total_price: true,
      user_id: true,
      room_types: { select: { name: true, price: true } },
    },
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status !== "new") {
    throw new Error("Booking is not in a valid state for payment");
  }

  item_details.push({
    id: booking_id,
    price: booking.room_types.price,
    quantity: 1,
    name: booking.room_types.name,
  });

  const user = await prisma.user.findUnique({
    where: { id: booking.user_id },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MID_SERVER_KEY,
  });

  const parameters = {
    transaction_details: {
      order_id: booking_id,
      gross_amount: booking.total_price,
    },
    customer_details: { username: user.username, email: user.email },
    item_details,
    expiry: { unit: "minutes", duration: 30 },
  };

  const transaction = await snap.createTransaction(parameters);
  return transaction.token;
}

export async function handleMidtransWebhook(
  transactionStatus: string,
  order_id: string
) {
  let statusTransaction: "completed" | "new" | "canceled" = "new";

  if (transactionStatus === "settlement") {
    statusTransaction = "completed";
  } else if (transactionStatus === "cancel") {
    statusTransaction = "canceled";
  }

  await prisma.booking.update({
    where: { id: order_id },
    data: { status: statusTransaction },
  });
}
