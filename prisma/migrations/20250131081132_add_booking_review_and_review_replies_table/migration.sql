/*
  Warnings:

  - You are about to drop the column `image` on the `Property` table. All the data in the column will be lost.
  - Added the required column `room_types_id` to the `Unavailable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "image",
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "desc" DROP NOT NULL,
ALTER COLUMN "terms_condition" DROP NOT NULL,
ALTER COLUMN "click_rate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RoomTypes" ALTER COLUMN "bed_details" DROP NOT NULL,
ALTER COLUMN "avg_rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Unavailable" ADD COLUMN     "room_types_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Unavailable" ADD CONSTRAINT "Unavailable_room_types_id_fkey" FOREIGN KEY ("room_types_id") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
