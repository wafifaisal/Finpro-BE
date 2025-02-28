/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Unavailable` table. All the data in the column will be lost.
  - Added the required column `room_types_id` to the `Unavailable` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Unavailable" DROP CONSTRAINT "Unavailable_propertyId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Unavailable" DROP COLUMN "propertyId",
ADD COLUMN     "room_types_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Unavailable" ADD CONSTRAINT "Unavailable_room_types_id_fkey" FOREIGN KEY ("room_types_id") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
