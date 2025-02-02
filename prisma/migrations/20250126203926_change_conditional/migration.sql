/*
  Warnings:

  - You are about to drop the column `image` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "image",
ALTER COLUMN "desc" DROP NOT NULL,
ALTER COLUMN "terms_condition" DROP NOT NULL,
ALTER COLUMN "click_rate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RoomTypes" ALTER COLUMN "bed_details" DROP NOT NULL,
ALTER COLUMN "avg_rating" DROP NOT NULL;
