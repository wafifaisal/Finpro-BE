-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "facilitiesId" INTEGER;

-- CreateTable
CREATE TABLE "facilities" (
    "id" SERIAL NOT NULL,
    "facility" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property_facilities" (
    "propertyId" INTEGER NOT NULL,
    "facilitiesId" INTEGER NOT NULL,

    CONSTRAINT "property_facilities_pkey" PRIMARY KEY ("propertyId","facilitiesId")
);

-- CreateTable
CREATE TABLE "room_facilities" (
    "room_typesId" INTEGER NOT NULL,
    "facilitiesId" INTEGER NOT NULL,

    CONSTRAINT "room_facilities_pkey" PRIMARY KEY ("room_typesId","facilitiesId")
);

-- CreateTable
CREATE TABLE "seasonal_prices" (
    "id" SERIAL NOT NULL,
    "price" DECIMAL(11,2) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "room_typesId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seasonal_prices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_facilitiesId_fkey" FOREIGN KEY ("facilitiesId") REFERENCES "facilities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_facilities" ADD CONSTRAINT "property_facilities_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_facilities" ADD CONSTRAINT "property_facilities_facilitiesId_fkey" FOREIGN KEY ("facilitiesId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_facilities" ADD CONSTRAINT "room_facilities_room_typesId_fkey" FOREIGN KEY ("room_typesId") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_facilities" ADD CONSTRAINT "room_facilities_facilitiesId_fkey" FOREIGN KEY ("facilitiesId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seasonal_prices" ADD CONSTRAINT "seasonal_prices_room_typesId_fkey" FOREIGN KEY ("room_typesId") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
