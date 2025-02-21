-- AlterTable
ALTER TABLE "seasonal_prices" ADD COLUMN     "apply_holiday" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "apply_weekend" BOOLEAN NOT NULL DEFAULT false;
