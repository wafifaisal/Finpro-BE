/*
  Warnings:

  - A unique constraint covering the columns `[no_handphone]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[no_handphone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `no_handphone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "no_handphone" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "no_handphone" TEXT NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_no_handphone_key" ON "Tenant"("no_handphone");

-- CreateIndex
CREATE UNIQUE INDEX "User_no_handphone_key" ON "User"("no_handphone");
