import { Request, Response } from "express";
import prisma from "../../prisma";
import { buildPropertyResponse } from "../../utils/PropertyResponseBuilder";

export class PropertyController {
  async getProperty(req: Request, res: Response): Promise<void> {
    try {
      const response = await buildPropertyResponse(req.query);
      res.status(200).json(response);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving properties" });
    }
  }

  async GetPropertyById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid property ID" });
        return;
      }
      const prop = await prisma.property.findUnique({
        where: { id },
        include: {
          location: true,
          tenant: true,
          PropertyImages: true,
          RoomTypes: {
            include: {
              RoomImages: true,
              Unavailable: true,
              seasonal_prices: true,
              Booking: true,
              Review: true,
            },
          },
        },
      });
      if (!prop) {
        res.status(404).json({ message: "Property not found" });
        return;
      }
      res.status(200).json(prop);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPropertySuggestions(req: Request, res: Response): Promise<void> {
    try {
      const name = req.query.name as string;
      if (!name?.trim()) {
        res.status(400).json({ suggestions: [] });
        return;
      }
      const props = await prisma.property.findMany({
        where: { name: { contains: name, mode: "insensitive" } },
        select: { name: true },
        take: 5,
      });
      res.status(200).json({ suggestions: props.map((p) => p.name) });
    } catch (e) {
      console.error(e);
      res.status(500).json({ suggestions: [] });
    }
  }

  async getRoomTypeById(req: Request, res: Response): Promise<void> {
    try {
      const propertyId = parseInt(req.params.property_id, 10);
      const roomTypeId = parseInt(req.params.roomtype_id, 10);
      if (isNaN(propertyId) || isNaN(roomTypeId)) {
        res.status(400).json({ message: "IDs must be valid numbers" });
        return;
      }
      const rt = await prisma.roomTypes.findUnique({
        where: { id: roomTypeId },
        include: {
          RoomImages: true,
          Unavailable: true,
          seasonal_prices: true,
          Booking: true,
          Review: true,
        },
      });
      if (!rt) {
        res.status(404).json({ message: "Room type not found" });
        return;
      }
      if (rt.property_id !== propertyId) {
        res
          .status(400)
          .json({ message: "Room type does not belong to given property" });
        return;
      }
      const imagePreviews = rt.RoomImages.map((img) => img.image_url);
      const unavailable = rt.Unavailable.map((u) => ({
        id: u.id,
        start_date: u.start_date,
        end_date: u.end_date,
      }));
      res.status(200).json({ roomType: { ...rt, imagePreviews, unavailable } });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error retrieving room type" });
    }
  }

  async incrementClickRate(req: Request, res: Response): Promise<void> {
    const propertyId = parseInt(req.query.id as string, 10);
    if (isNaN(propertyId)) {
      res.status(400).json({ message: "Invalid property id" });
      return;
    }
    try {
      await prisma.property.update({
        where: { id: propertyId },
        data: { click_rate: { increment: 1 } },
      });
      res.status(200).json({ message: "Click rate incremented" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPropertyCount(req: Request, res: Response): Promise<void> {
    try {
      const count = await prisma.property.count();
      res.status(200).json({ count });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
