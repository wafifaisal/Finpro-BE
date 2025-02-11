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

      const {
        name,
        stock,
        price,
        capacity,
        bed_details,
        has_breakfast,
        breakfast_price,
        facilities,
      } = req.body;

      // Validasi property_id
      if (!property_id) {
        res.status(400).json({ message: "Property ID is required" });
        return;
      }

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
          // Ubah setiap elemen menjadi string, trim, dan ubah ke huruf besar agar sesuai dengan enum RoomFacility
          roomFacilitiesData = facilitiesArr.map((fac: any) =>
            fac.toString().trim().toUpperCase()
          );
        }
      }

      // Buat room type dengan nested image creation dan facilities
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
        },
      });

      res.status(201).json(room);
    } catch (err) {
      console.error("Error creating room type:", err);
      res.status(400).json(err);
    }
  }
}
