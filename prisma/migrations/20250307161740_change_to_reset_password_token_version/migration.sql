/*
  Warnings:

  - You are about to drop the column `resetPasswordUsed` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordUsed` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "resetPasswordUsed",
ADD COLUMN     "resetPasswordTokenVersion" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "resetPasswordUsed",
ADD COLUMN     "resetPasswordTokenVersion" INTEGER NOT NULL DEFAULT 0;
