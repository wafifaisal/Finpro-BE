import { Request, Response } from "express";
import prisma from "../../../prisma"; // Sesuaikan path dengan struktur proyek Anda
import { cloudinaryUpload } from "../../../services/cloudinary";

export class CreateController {
  async CreateProperty(req: Request, res: Response) {
    try {
      if (
        !req.files ||
        !(req.files instanceof Array) ||
        req.files.length === 0
      ) {
        throw { message: "Images don't exist" };
      }

      // Proses lokasi
      let location = req.body.location;
      if (typeof location === "string") {
        location = JSON.parse(location);
      }

      const imageUploads = await Promise.all(
        (req.files as Express.Multer.File[]).map(async (file) => {
          return cloudinaryUpload(file, "property");
        })
      );

      const imagesData = imageUploads.map(({ secure_url }) => ({
        image_url: secure_url,
      }));

      const { name, desc, category, terms_condition, facilities } = req.body;

      let locationData;
      if (typeof location === "string" && !isNaN(Number(location))) {
        locationData = { connect: { id: Number(location) } };
      } else if (typeof location === "object" && location.address) {
        const { address, country, city, longitude, latitude } = location;
        if (!address || !country || !city) {
          throw { message: "Missing required location fields" };
        }
        locationData = {
          create: {
            address,
            country,
            city,
            longitude: Number(longitude),
            latitude: Number(latitude),
          },
        };
      } else {
        throw { message: "Invalid location data" };
      }

      let propertyFacilitiesData;
      if (facilities) {
        let facilitiesArr;
        if (typeof facilities === "string") {
          try {
            facilitiesArr = JSON.parse(facilities);
          } catch (err) {
            facilitiesArr = facilities.split(",");
          }
        } else if (Array.isArray(facilities)) {
          facilitiesArr = facilities;
        }

        if (Array.isArray(facilitiesArr) && facilitiesArr.length > 0) {
          // Ubah setiap elemen menjadi string, trim, dan ubah ke huruf besar agar sesuai dengan enum PropertyFacility
          propertyFacilitiesData = facilitiesArr.map((fac: any) =>
            fac.toString().trim().toUpperCase()
          );
        }
      }

      // Buat property beserta relasi gambar dan facilities
      const property = await prisma.property.create({
        data: {
          name,
          desc,
          category,
          terms_condition,
          location: locationData,
          tenant: {
            connect: { id: req.tenant?.id },
          },
          PropertyImages: {
            create: imagesData,
          },
          facilities: propertyFacilitiesData || [],
        },
      });

      res.status(200).send({
        message: "Property created",
        property_id: property.id,
      });
    } catch (err) {
      console.error("Error creating property:", err);
      res.status(400).send(err);
    }
  }

  async CreateRoomTypes(req: Request, res: Response): Promise<void> {
    try {
      if (
        !req.files ||
        !(req.files instanceof Array) ||
        req.files.length === 0
      ) {
        res.status(400).json({ message: "Images don't exist" });
        return;
      }

      // Upload gambar ke Cloudinary
      const imageUploads = await Promise.all(
        (req.files as Express.Multer.File[]).map(async (file) => {
          return cloudinaryUpload(file, "room");
        })
      );
      const imagesData = imageUploads.map(({ secure_url }) => ({
        image_url: secure_url,
      }));

      const { property_id } = req.params;
      const propertyIdNum = parseInt(property_id, 10);
      if (isNaN(propertyIdNum)) {
        res.status(400).json({ message: "Property ID must be a valid number" });
        return;
      }

      // Ekstrak field room type dari body
      const {
        name,
        stock,
        price,
        capacity,
        bed_details,
        has_breakfast,
        breakfast_price,
        facilities,
        seasonal_prices, // Dikirim sebagai JSON string
        unavailable, // Dikirim sebagai JSON string
      } = req.body;

      // Proses facilities untuk room type (jika diberikan)
      let roomFacilitiesData;
      if (facilities) {
        let facilitiesArr;
        if (typeof facilities === "string") {
          try {
            facilitiesArr = JSON.parse(facilities);
          } catch (err) {
            facilitiesArr = facilities.split(",");
          }
        } else if (Array.isArray(facilities)) {
          facilitiesArr = facilities;
        }
        if (Array.isArray(facilitiesArr) && facilitiesArr.length > 0) {
          roomFacilitiesData = facilitiesArr.map((fac: any) =>
            fac.toString().trim().toUpperCase()
          );
        }
      }

      // Parsing data seasonal_prices dan unavailable (jika dikirim)
      let seasonalPricesParsed: any[] = [];
      if (seasonal_prices) {
        try {
          seasonalPricesParsed = JSON.parse(seasonal_prices);
        } catch (error) {
          seasonalPricesParsed = [];
        }
      }

      let unavailablePeriodsParsed: any[] = [];
      if (unavailable) {
        try {
          unavailablePeriodsParsed = JSON.parse(unavailable);
        } catch (error) {
          unavailablePeriodsParsed = [];
        }
      }

      // Buat room type dengan nested image creation, facilities, seasonal_prices, dan Unavailable
      const room = await prisma.roomTypes.create({
        data: {
          name,
          stock: parseInt(stock, 10),
          price: parseInt(price, 10),
          capacity: parseInt(capacity, 10),
          bed_details,
          has_breakfast: has_breakfast === "true" || has_breakfast === true,
          breakfast_price: parseInt(breakfast_price, 10),
          property: {
            connect: { id: propertyIdNum },
          },
          RoomImages: {
            create: imagesData,
          },
          facilities: roomFacilitiesData || [],
          seasonal_prices: {
            create: seasonalPricesParsed.map((sp: any) => ({
              price: parseFloat(sp.price),
              start_date: new Date(sp.start_date),
              end_date: new Date(sp.end_date),
              apply_weekend: sp.apply_weekend ? true : false,
              apply_holiday: sp.apply_holiday ? true : false,
            })),
          },
          Unavailable: {
            create: unavailablePeriodsParsed.map((u: any) => ({
              start_date: new Date(u.start_date),
              end_date: new Date(u.end_date),
            })),
          },
        },
      });

      res.status(201).json(room);
    } catch (err) {
      console.error("Error creating room type:", err);
      res.status(400).json(err);
    }
  }

  // ================================
  // Method untuk mengedit property
  // ================================
  async EditProperty(req: Request, res: Response) {
    try {
      const propertyId = Number(req.params.property_id);
      if (isNaN(propertyId)) {
        res.status(400).json({ message: "Invalid property ID" });
        return;
      }

      // Proses gambar baru jika diberikan
      let imagesData;
      if (req.files && req.files instanceof Array && req.files.length > 0) {
        const imageUploads = await Promise.all(
          (req.files as Express.Multer.File[]).map(async (file) => {
            return cloudinaryUpload(file, "property");
          })
        );
        imagesData = imageUploads.map(({ secure_url }) => ({
          image_url: secure_url,
        }));
      }

      // Proses data lokasi jika diberikan
      let locationData;
      if (req.body.location) {
        let location = req.body.location;
        if (typeof location === "string") {
          location = JSON.parse(location);
        }

        if (typeof location === "string" && !isNaN(Number(location))) {
          // Jika lokasi dikirim sebagai ID, lakukan koneksi ke lokasi yang sudah ada
          locationData = { connect: { id: Number(location) } };
        } else if (typeof location === "object" && location.address) {
          const { address, country, city, longitude, latitude } = location;
          if (!address || !country || !city) {
            throw { message: "Missing required location fields" };
          }
          // Update lokasi yang sudah ada
          locationData = {
            update: {
              address,
              country,
              city,
              longitude: Number(longitude),
              latitude: Number(latitude),
            },
          };
        } else {
          throw { message: "Invalid location data" };
        }
      }

      // Proses facilities jika diberikan
      let propertyFacilitiesData;
      if (req.body.facilities) {
        let facilitiesArr;
        if (typeof req.body.facilities === "string") {
          try {
            facilitiesArr = JSON.parse(req.body.facilities);
          } catch (err) {
            facilitiesArr = req.body.facilities.split(",");
          }
        } else if (Array.isArray(req.body.facilities)) {
          facilitiesArr = req.body.facilities;
        }
        if (Array.isArray(facilitiesArr) && facilitiesArr.length > 0) {
          propertyFacilitiesData = facilitiesArr.map((fac: any) =>
            fac.toString().trim().toUpperCase()
          );
        }
      }

      // Ekstrak field-field property lainnya
      const { name, desc, category, terms_condition } = req.body;

      // Membangun objek data untuk update
      const updateData: any = {};
      if (name) updateData.name = name;
      if (desc) updateData.desc = desc;
      if (category) updateData.category = category;
      if (terms_condition) updateData.terms_condition = terms_condition;
      if (propertyFacilitiesData)
        updateData.facilities = propertyFacilitiesData;
      if (locationData) updateData.location = locationData;

      if (imagesData) {
        // Hapus gambar lama (jika ingin menggantinya)
        await prisma.propertyImages.deleteMany({
          where: { property_id: propertyId },
        });
        updateData.PropertyImages = {
          create: imagesData,
        };
      }

      const updatedProperty = await prisma.property.update({
        where: { id: propertyId },
        data: updateData,
      });

      res.status(200).json({
        message: "Property updated successfully",
        property: updatedProperty,
      });
    } catch (err) {
      console.error("Error updating property:", err);
      res.status(400).json(err);
    }
  }

  // ================================
  // Method untuk menghapus property
  // ================================
  async DeleteProperty(req: Request, res: Response) {
    try {
      const propertyId = Number(req.params.property_id);
      if (isNaN(propertyId)) {
        res.status(400).json({ message: "Invalid property ID" });
        return;
      }

      // Cek apakah property ada
      const property = await prisma.property.findUnique({
        where: { id: propertyId },
      });
      if (!property) {
        res.status(404).json({ message: "Property not found" });
        return;
      }

      // Hapus gambar terkait (jika cascade delete belum diaktifkan)
      await prisma.propertyImages.deleteMany({
        where: { property_id: propertyId },
      });

      // Hapus property
      await prisma.property.delete({
        where: { id: propertyId },
      });

      res.status(200).json({ message: "Property deleted successfully" });
    } catch (err) {
      console.error("Error deleting property:", err);
      res.status(400).json(err);
    }
  }

  // ================================
  // Method untuk mengedit room type
  // ================================
  async EditRoomType(req: Request, res: Response) {
    try {
      const roomTypeId = Number(req.params.roomtype_id);
      if (isNaN(roomTypeId)) {
        res.status(400).json({ message: "Invalid room type ID" });
        return;
      }

      // Proses gambar baru jika diberikan
      let imagesData;
      if (req.files && req.files instanceof Array && req.files.length > 0) {
        const imageUploads = await Promise.all(
          (req.files as Express.Multer.File[]).map(async (file) => {
            return cloudinaryUpload(file, "room");
          })
        );
        imagesData = imageUploads.map(({ secure_url }) => ({
          image_url: secure_url,
        }));
      }

      // Proses facilities untuk room type (jika diberikan)
      let roomFacilitiesData;
      if (req.body.facilities) {
        let facilitiesArr;
        if (typeof req.body.facilities === "string") {
          try {
            facilitiesArr = JSON.parse(req.body.facilities);
          } catch (err) {
            facilitiesArr = req.body.facilities.split(",");
          }
        } else if (Array.isArray(req.body.facilities)) {
          facilitiesArr = req.body.facilities;
        }
        if (Array.isArray(facilitiesArr) && facilitiesArr.length > 0) {
          roomFacilitiesData = facilitiesArr.map((fac: any) =>
            fac.toString().trim().toUpperCase()
          );
        }
      }

      const {
        name,
        stock,
        price,
        capacity,
        bed_details,
        has_breakfast,
        breakfast_price,
        seasonal_prices, // JSON string
        unavailable, // JSON string
      } = req.body;

      // Membangun objek data untuk update
      const updateData: any = {};
      if (name) updateData.name = name;
      if (stock) updateData.stock = parseInt(stock, 10);
      if (price) updateData.price = parseInt(price, 10);
      if (capacity) updateData.capacity = parseInt(capacity, 10);
      if (bed_details) updateData.bed_details = bed_details;
      if (typeof has_breakfast !== "undefined")
        updateData.has_breakfast =
          has_breakfast === "true" || has_breakfast === true;
      if (breakfast_price)
        updateData.breakfast_price = parseInt(breakfast_price, 10);
      if (roomFacilitiesData) updateData.facilities = roomFacilitiesData;

      if (imagesData) {
        // Hapus gambar lama (jika ingin menggantinya)
        await prisma.roomImages.deleteMany({
          where: { room_types_id: roomTypeId },
        });
        updateData.RoomImages = {
          create: imagesData,
        };
      }

      // Jika data seasonal_prices dikirim, hapus record lama dan buat record baru
      if (seasonal_prices) {
        try {
          const seasonalPricesParsed = JSON.parse(seasonal_prices);
          await prisma.seasonal_prices.deleteMany({
            where: { room_typesId: roomTypeId },
          });
          updateData.seasonal_prices = {
            create: seasonalPricesParsed.map((sp: any) => ({
              price: parseFloat(sp.price),
              start_date: new Date(sp.start_date),
              end_date: new Date(sp.end_date),
              apply_weekend: sp.apply_weekend ? true : false,
              apply_holiday: sp.apply_holiday ? true : false,
            })),
          };
        } catch (error) {
          updateData.seasonal_prices = { create: [] };
        }
      }

      // Jika data unavailable dikirim, hapus record lama dan buat record baru
      if (unavailable) {
        try {
          const unavailableParsed = JSON.parse(unavailable);
          await prisma.unavailable.deleteMany({
            where: { room_types_id: roomTypeId },
          });
          updateData.Unavailable = {
            create: unavailableParsed.map((u: any) => ({
              start_date: new Date(u.start_date),
              end_date: new Date(u.end_date),
            })),
          };
        } catch (error) {
          updateData.Unavailable = { create: [] };
        }
      }

      const updatedRoom = await prisma.roomTypes.update({
        where: { id: roomTypeId },
        data: updateData,
      });

      res.status(200).json({
        message: "Room type updated successfully",
        room: updatedRoom,
      });
    } catch (err) {
      console.error("Error updating room type:", err);
      res.status(400).json(err);
    }
  }

  // ================================
  // Method untuk menghapus room type
  // ================================
  async DeleteRoomType(req: Request, res: Response) {
    try {
      const roomTypeId = Number(req.params.roomtype_id);
      if (isNaN(roomTypeId)) {
        res.status(400).json({ message: "Invalid room type ID" });
        return;
      }

      // Cek apakah room type ada
      const room = await prisma.roomTypes.findUnique({
        where: { id: roomTypeId },
      });
      if (!room) {
        res.status(404).json({ message: "Room type not found" });
        return;
      }

      // Hapus gambar terkait (jika cascade delete belum diaktifkan)
      await prisma.roomImages.deleteMany({
        where: { room_types_id: roomTypeId },
      });

      // Hapus room type
      await prisma.roomTypes.delete({
        where: { id: roomTypeId },
      });

      res.status(200).json({ message: "Room type deleted successfully" });
    } catch (err) {
      console.error("Error deleting room type:", err);
      res.status(400).json(err);
    }
  }
}
