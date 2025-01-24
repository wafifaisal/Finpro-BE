/*
  Warnings:

  - You are about to drop the column `address` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Tenant` table. All the data in the column will be lost.
  - Added the required column `no_handphone` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "address",
DROP COLUMN "phone",
ADD COLUMN     "no_handphone" VARCHAR(255) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
