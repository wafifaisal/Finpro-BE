/*
  Warnings:

  - The `longitude` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `latitude` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `lastLoginLocation` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "longitude",
ADD COLUMN     "longitude" DOUBLE PRECISION,
DROP COLUMN "latitude",
ADD COLUMN     "latitude" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastLoginLocation";
