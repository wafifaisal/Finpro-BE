/*
  Warnings:

  - Added the required column `quantity` to the `Unavailable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unavailable" ADD COLUMN     "quantity" INTEGER NOT NULL;
