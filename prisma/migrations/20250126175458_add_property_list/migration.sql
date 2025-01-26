-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "terms_condition" TEXT NOT NULL,
    "room_available" INTEGER NOT NULL,
    "click_rate" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyImages" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "property_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PropertyImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "bed_details" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "has_breakfast" BOOLEAN NOT NULL DEFAULT false,
    "breakfast_price" INTEGER NOT NULL,
    "avg_rating" INTEGER NOT NULL,
    "property_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "RoomTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomImages" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "room_types_id" INTEGER NOT NULL,

    CONSTRAINT "RoomImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unavailable" (
    "id" SERIAL NOT NULL,
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unavailable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyImages" ADD CONSTRAINT "PropertyImages_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomTypes" ADD CONSTRAINT "RoomTypes_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomImages" ADD CONSTRAINT "RoomImages_room_types_id_fkey" FOREIGN KEY ("room_types_id") REFERENCES "RoomTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
