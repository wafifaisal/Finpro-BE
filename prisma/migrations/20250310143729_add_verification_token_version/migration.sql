-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "verificationTokenVersion" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationTokenVersion" INTEGER NOT NULL DEFAULT 0;
