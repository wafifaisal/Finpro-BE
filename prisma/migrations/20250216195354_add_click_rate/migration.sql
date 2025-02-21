/*
  Warnings:

  - Made the column `click_rate` on table `Property` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Property" ALTER COLUMN "click_rate" SET NOT NULL,
ALTER COLUMN "click_rate" SET DEFAULT 0;
