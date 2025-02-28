-- AlterTable
ALTER TABLE "seasonal_prices" ADD COLUMN     "dates" TIMESTAMP(3)[],
ALTER COLUMN "start_date" DROP NOT NULL,
ALTER COLUMN "end_date" DROP NOT NULL;
