/*
  Warnings:

  - You are about to drop the `bank_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `booking_histories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `booking_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bookings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listing_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listing_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nonavailability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `promotions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `providers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review_replies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seasonal_prices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bank_details" DROP CONSTRAINT "bank_details_tenantsId_fkey";

-- DropForeignKey
ALTER TABLE "booking_histories" DROP CONSTRAINT "booking_histories_booking_statusId_fkey";

-- DropForeignKey
ALTER TABLE "booking_histories" DROP CONSTRAINT "booking_histories_bookingsId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_booking_statusId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_payment_typesId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_promotionsId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_room_typesId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_usersId_fkey";

-- DropForeignKey
ALTER TABLE "listing_facilities" DROP CONSTRAINT "listing_facilities_facilitiesId_fkey";

-- DropForeignKey
ALTER TABLE "listing_facilities" DROP CONSTRAINT "listing_facilities_listingsId_fkey";

-- DropForeignKey
ALTER TABLE "listing_images" DROP CONSTRAINT "listing_images_listingsId_fkey";

-- DropForeignKey
ALTER TABLE "listings" DROP CONSTRAINT "listings_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "listings" DROP CONSTRAINT "listings_tenantsId_fkey";

-- DropForeignKey
ALTER TABLE "nonavailability" DROP CONSTRAINT "nonavailability_room_typesId_fkey";

-- DropForeignKey
ALTER TABLE "review_replies" DROP CONSTRAINT "review_replies_reviewsId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_bookingsId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_listingsId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_usersId_fkey";

-- DropForeignKey
ALTER TABLE "room_facilities" DROP CONSTRAINT "room_facilities_facilitiesId_fkey";

-- DropForeignKey
ALTER TABLE "room_facilities" DROP CONSTRAINT "room_facilities_room_typesId_fkey";

-- DropForeignKey
ALTER TABLE "room_images" DROP CONSTRAINT "room_images_room_typesId_fkey";

-- DropForeignKey
ALTER TABLE "room_types" DROP CONSTRAINT "room_types_listingsId_fkey";

-- DropForeignKey
ALTER TABLE "seasonal_prices" DROP CONSTRAINT "seasonal_prices_room_typesId_fkey";

-- DropForeignKey
ALTER TABLE "tenants" DROP CONSTRAINT "tenants_usersId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_providersId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_rolesId_fkey";

-- DropTable
DROP TABLE "bank_details";

-- DropTable
DROP TABLE "booking_histories";

-- DropTable
DROP TABLE "booking_status";

-- DropTable
DROP TABLE "bookings";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "facilities";

-- DropTable
DROP TABLE "listing_facilities";

-- DropTable
DROP TABLE "listing_images";

-- DropTable
DROP TABLE "listings";

-- DropTable
DROP TABLE "nonavailability";

-- DropTable
DROP TABLE "payment_types";

-- DropTable
DROP TABLE "promotions";

-- DropTable
DROP TABLE "providers";

-- DropTable
DROP TABLE "review_replies";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "room_facilities";

-- DropTable
DROP TABLE "room_images";

-- DropTable
DROP TABLE "room_types";

-- DropTable
DROP TABLE "seasonal_prices";

-- DropTable
DROP TABLE "tenants";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
