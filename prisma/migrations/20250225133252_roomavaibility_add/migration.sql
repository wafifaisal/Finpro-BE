/*
  Warnings:

  - You are about to drop the column `quantity` on the `Unavailable` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Unavailable" DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "RoomAvailability" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "availableCount" INTEGER NOT NULL,
    "room_typesId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoomAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomAvailability_date_room_typesId_key" ON "RoomAvailability"("date", "room_typesId");

-- AddForeignKey
ALTER TABLE "RoomAvailability" ADD CONSTRAINT "RoomAvailability_room_typesId_fkey" FOREIGN KEY ("room_typesId") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
