import { Request, Response } from "express";
import prisma from "../../prisma"; // Pastikan path sesuai dengan project Anda
import { cloudinaryUpload } from "../../services/cloudinary";

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

      const { name, desc, category, terms_condition } = req.body;

      let locationData;

      if (typeof location === "string" && !isNaN(Number(location))) {
        // Jika location berupa ID, hubungkan dengan lokasi yang ada
        locationData = { connect: { id: Number(location) } };
      } else if (typeof location === "object" && location.address) {
        // Jika lokasi adalah object baru, buat entri baru
        const { address, country, city, longitude, latitude } = location;

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

      if (!location.address || !location.country || !location.city) {
        throw { message: "Missing required location fields" };
      }

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
}
