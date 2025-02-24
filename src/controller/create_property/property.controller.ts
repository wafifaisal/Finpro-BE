import { Request, Response } from "express";
import prisma from "../../prisma";
import { uploadImages } from "../../services/ImageServices";
import {
  parseLocation,
  parseLocationUpdate,
  parseFacilities,
} from "../../utils/ParseUtils";

export class CreatePropertyController {
  async createProperty(req: Request, res: Response): Promise<void> {
    try {
      const imgs = await uploadImages(
        req.files as Express.Multer.File[],
        "property"
      );
      const loc = parseLocation(req.body.location);
      const facs = parseFacilities(req.body.facilities);
      const { name, desc, category, terms_condition } = req.body;
      const property = await prisma.property.create({
        data: {
          name,
          desc,
          category,
          terms_condition,
          location: loc,
          tenant: { connect: { id: req.tenant?.id } },
          PropertyImages: { create: imgs },
          facilities: facs,
        },
      });
      res
        .status(200)
        .send({ message: "Property created", property_id: property.id });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async editProperty(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.property_id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid property ID" });
        return;
      }
      const imgs =
        req.files && Array.isArray(req.files) && req.files.length
          ? await uploadImages(req.files as Express.Multer.File[], "property")
          : null;
      const loc = req.body.location
        ? parseLocationUpdate(req.body.location)
        : null;
      const facs = req.body.facilities
        ? parseFacilities(req.body.facilities)
        : null;
      const { name, desc, category, terms_condition } = req.body;
      let data: any = {
        ...(name && { name }),
        ...(desc && { desc }),
        ...(category && { category }),
        ...(terms_condition && { terms_condition }),
        ...(facs && { facilities: facs }),
        ...(loc && { location: loc }),
      };
      if (imgs) {
        await prisma.propertyImages.deleteMany({ where: { property_id: id } });
        data.PropertyImages = { create: imgs };
      }
      const upd = await prisma.property.update({ where: { id }, data });
      res
        .status(200)
        .json({ message: "Property updated successfully", property: upd });
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async deleteProperty(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.property_id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid property ID" });
        return;
      }
      const prop = await prisma.property.findUnique({ where: { id } });
      if (!prop) {
        res.status(404).json({ message: "Property not found" });
        return;
      }
      await prisma.roomTypes.deleteMany({ where: { property_id: id } });
      await prisma.propertyImages.deleteMany({ where: { property_id: id } });

      await prisma.property.delete({ where: { id } });
      res.status(200).json({ message: "Property deleted successfully" });
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
