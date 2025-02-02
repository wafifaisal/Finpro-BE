/*
  Warnings:

  - Added the required column `propertyId` to the `Unavailable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Unavailable" ADD COLUMN     "propertyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Unavailable" ADD CONSTRAINT "Unavailable_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
