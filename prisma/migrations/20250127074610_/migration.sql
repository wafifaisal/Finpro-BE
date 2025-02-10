-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Manual', 'Midtrans');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('new', 'completed', 'canceled', 'waiting_payment');

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "num_of_guests" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "details" JSONB,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "payment_proof" TEXT,
    "payment_method" "PaymentMethod",
    "status" "BookingStatus" NOT NULL DEFAULT 'new',
    "user_id" TEXT NOT NULL,
    "room_types_id" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "room_types_id" INTEGER NOT NULL,
    "booking_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewReplies" (
    "id" SERIAL NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "review_id" INTEGER NOT NULL,
    "reply" TEXT NOT NULL,

    CONSTRAINT "ReviewReplies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_room_types_id_fkey" FOREIGN KEY ("room_types_id") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_room_types_id_fkey" FOREIGN KEY ("room_types_id") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewReplies" ADD CONSTRAINT "ReviewReplies_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewReplies" ADD CONSTRAINT "ReviewReplies_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
