-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "resetPasswordUsed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordUsed" BOOLEAN NOT NULL DEFAULT false;
