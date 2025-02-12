/*
  Warnings:

  - The values [LAUNDRY,PARKING,SWIMMING_POOL,KITCHEN,HEATING,AIR_PURIFIER] on the enum `PropertyFacility` will be removed. If these variants are still used in the database, this will fail.
  - The values [ROOM_SERVICE] on the enum `RoomFacility` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PropertyFacility_new" AS ENUM ('PEMANDANGAN_KOTA', 'PEMANDANGAN_ALAM', 'AKSES_PANTAI', 'TAMAN', 'RAMAH_HEWAN_PELIHARAAN', 'RESTAURANT', 'BAR', 'CONFERENCE_ROOM', 'PARKIR_GRATIS', 'KOLAM_RENANG', 'GYM', 'SPA', 'TAMAN_BERMAIN', 'DEKAT_WISATA', 'BUDGET', 'MEWAH');
ALTER TABLE "Property" ALTER COLUMN "facilities" DROP DEFAULT;
ALTER TABLE "Property" ALTER COLUMN "facilities" TYPE "PropertyFacility_new"[] USING ("facilities"::text::"PropertyFacility_new"[]);
ALTER TYPE "PropertyFacility" RENAME TO "PropertyFacility_old";
ALTER TYPE "PropertyFacility_new" RENAME TO "PropertyFacility";
DROP TYPE "PropertyFacility_old";
ALTER TABLE "Property" ALTER COLUMN "facilities" SET DEFAULT ARRAY[]::"PropertyFacility"[];
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "RoomFacility_new" AS ENUM ('WIFI', 'TV', 'AC', 'ROOM_SERVICES', 'MINI_BAR', 'LAUNDRY', 'SETRIKA', 'ALAT_PEMADAM_API', 'MICROWAVE', 'KULKAS', 'RUANG_KERJA_KHUSUS', 'KITCHEN', 'HEATING', 'AIR_PURIFIER', 'SAFE', 'BATHROBES', 'TEA_COFFEE_MAKER', 'BALCONY', 'BATHTUB', 'JACUZZI', 'PRIVATE_POOL');
ALTER TABLE "RoomTypes" ALTER COLUMN "facilities" DROP DEFAULT;
ALTER TABLE "RoomTypes" ALTER COLUMN "facilities" TYPE "RoomFacility_new"[] USING ("facilities"::text::"RoomFacility_new"[]);
ALTER TYPE "RoomFacility" RENAME TO "RoomFacility_old";
ALTER TYPE "RoomFacility_new" RENAME TO "RoomFacility";
DROP TYPE "RoomFacility_old";
ALTER TABLE "RoomTypes" ALTER COLUMN "facilities" SET DEFAULT ARRAY[]::"RoomFacility"[];
COMMIT;
