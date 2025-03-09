import { Request, Response } from "express";
import prisma from "../../prisma";
import { buildPropertyResponse } from "../../utils/PropertyResponseBuilder";

export class PropertyController {
  async getProperty(req: Request, res: Response): Promise<void> {
    try {
      const response = await buildPropertyResponse({
        ...req.query,
        isAvailable: true,
      });
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
      const prop = await prisma.property.findFirst({
        where: { id, isAvailable: true },
        include: {
          location: true,
          tenant: true,
          PropertyImages: {
            where: { deletedAt: null },
          },
          RoomTypes: {
            where: { deletedAt: null },
            include: {
              RoomImages: {
                where: { deletedAt: null },
              },
              Unavailable: true,
              seasonal_prices: true,
              Booking: true,
              Review: {
                include: {
                  user: {
                    select: {
                      avatar: true,
                      username: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      if (!prop) {
        res.status(404).json({ message: "Property not found" });
        return;
      }
      const roomTypesWithRating = prop.RoomTypes.map((rt) => {
        const reviewCount = rt.Review.length;
        const totalRating = rt.Review.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const avg_rating = reviewCount > 0 ? totalRating / reviewCount : 0;
        return {
          ...rt,
          avg_rating,
          reviewCount,
        };
      });

      const allReviews = prop.RoomTypes.flatMap((rt) => rt.Review);
      const totalReviews = allReviews.length;
      const overallTotalRating = allReviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const overallRating =
        totalReviews > 0 ? overallTotalRating / totalReviews : 0;

      const response = {
        ...prop,
        overallRating,
        totalReviews,
        RoomTypes: roomTypesWithRating,
      };

      res.status(200).json(response);
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
        where: {
          name: { contains: name, mode: "insensitive" },
          isAvailable: true,
        },
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
      const rt = await prisma.roomTypes.findFirst({
        where: { id: roomTypeId, deletedAt: null },
        include: {
          RoomImages: { where: { deletedAt: null } },
          Unavailable: true,
          seasonal_prices: true,
          Booking: true,
          Review: {
            include: {
              user: {
                select: {
                  avatar: true,
                  username: true,
                  email: true,
                },
              },
            },
          },
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

      const reviewCount = rt.Review.length;
      const totalRating = rt.Review.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const avg_rating = reviewCount > 0 ? totalRating / reviewCount : 0;

      res.status(200).json({
        roomType: {
          ...rt,
          avg_rating,
          reviewCount,
          imagePreviews,
          unavailable,
        },
      });
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
      const count = await prisma.property.count({
        where: { isAvailable: true },
      });
      res.status(200).json({ count });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRoomTypes(req: Request, res: Response): Promise<void> {
    try {
      const { roomId } = req.params;
      const id = parseInt(roomId, 10);
      if (isNaN(id)) {
        res.status(400).json({ error: "Invalid room ID" });
        return;
      }
      const room = await prisma.roomTypes.findFirst({
        where: { id, deletedAt: null },
        include: {
          RoomImages: { where: { deletedAt: null } },
          RoomAvailability: true,
          seasonal_prices: true,
        },
      });

      if (!room) {
        res.status(404).json({ error: "Room not found" });
        return;
      }

      res.status(200).json(room);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getTenantPropertyCount(req: Request, res: Response): Promise<void> {
    try {
      const { tenantId } = req.params;
      if (!tenantId) {
        res.status(400).json({ message: "Tenant ID is required" });
        return;
      }

      const totalProperties = await prisma.property.count({
        where: { tenantId, isAvailable: true },
      });

      res.status(200).json({ totalProperties });
    } catch (e) {
      console.error("Error fetching tenant property count:", e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
