/*
  Warnings:

  - You are about to drop the `facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room_facilities` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RoomFacility" AS ENUM ('WIFI', 'TV', 'AC', 'MINI_BAR', 'ROOM_SERVICE', 'SAFE', 'BATHROBES', 'TEA_COFFEE_MAKER', 'BALCONY');

-- CreateEnum
CREATE TYPE "PropertyFacility" AS ENUM ('LAUNDRY', 'PARKING', 'SWIMMING_POOL', 'GYM', 'SPA', 'RESTAURANT', 'BAR', 'CONFERENCE_ROOM', 'KITCHEN', 'HEATING', 'AIR_PURIFIER');

-- DropForeignKey
ALTER TABLE "property_facilities" DROP CONSTRAINT "property_facilities_facilitiesId_fkey";

-- DropForeignKey
ALTER TABLE "property_facilities" DROP CONSTRAINT "property_facilities_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "room_facilities" DROP CONSTRAINT "room_facilities_facilitiesId_fkey";

-- DropForeignKey
ALTER TABLE "room_facilities" DROP CONSTRAINT "room_facilities_room_typesId_fkey";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "facilities" "PropertyFacility"[] DEFAULT ARRAY[]::"PropertyFacility"[];

-- AlterTable
ALTER TABLE "RoomTypes" ADD COLUMN     "facilities" "RoomFacility"[] DEFAULT ARRAY[]::"RoomFacility"[];

-- DropTable
DROP TABLE "facilities";

-- DropTable
DROP TABLE "property_facilities";

-- DropTable
DROP TABLE "room_facilities";
