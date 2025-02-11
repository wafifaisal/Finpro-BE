import { Request, Response } from "express";
import prisma from "../../../prisma";

export class PropertyController {
  async getProperty(req: Request, res: Response) {
    try {
      // Default query parameters
      const limit = parseInt(req.query.limit as string) || 8;
      const page = parseInt(req.query.page as string) || 1;
      const sortBy = (req.query.sortBy as string) || "name";
      const sortOrder = (req.query.sortOrder as string) || "asc";
      const nameFilter = req.query.name as string;
      const categoryFilter = req.query.category as string;

      const filter: any = {};

      if (nameFilter) {
        filter.name = {
          contains: nameFilter,
          mode: "insensitive",
        };
      }

      if (categoryFilter) {
        filter.category = {
          equals: categoryFilter,
          mode: "insensitive",
        };
      }

      if (req.query.location) {
        filter.location = {
          city: {
            contains: req.query.location,
            mode: "insensitive",
          },
        };
      }

      const totalProperties = await prisma.property.count({
        where: filter,
      });
      const totalPages = Math.ceil(totalProperties / limit);
      const properties = await prisma.property.findMany({
        where: filter,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          name: true,
          desc: true,
          category: true,
          terms_condition: true,
          click_rate: true,
          location: {
            select: {
              address: true,
              city: true,
              country: true,
              latitude: true,
              longitude: true,
            },
          },
          PropertyImages: {
            select: {
              image_url: true,
            },
          },
          RoomTypes: {
            select: {
              id: true,
              name: true,
              price: true,
              avg_rating: true,
              Unavailable: {
                select: {
                  start_date: true,
                  end_date: true,
                },
              },
              seasonal_prices: {
                select: {
                  id: true,
                  price: true,
                  start_date: true,
                  end_date: true,
                },
              },
              Booking: {
                select: {
                  id: true,
                  start_date: true,
                  end_date: true,
                  total_price: true,
                  status: true,
                },
              },
              // Sertakan data review (ringkas)
              Review: {
                select: {
                  id: true,
                  rating: true,
                  review: true,
                  created_at: true,
                },
              },
            },
          },
          tenant: {
            select: {
              name: true,
              email: true,
            },
          },
          isAvailable: true,
        },
      });

      // Send response
      res.status(200).send({
        totalPages,
        currentPage: page,
        limit,
        result: properties,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error retrieving properties",
      });
    }
  }

  async GetPropertyById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const propertyId = parseInt(id, 10);

      if (isNaN(propertyId)) {
        res
          .status(400)
          .json({ message: "Property ID harus berupa angka yang valid" });
        return;
      }

      const property = await prisma.property.findUnique({
        where: { id: propertyId },
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

      if (!property) {
        res.status(404).json({ message: "Property tidak ditemukan" });
        return;
      }
      res.status(200).json(property);
    } catch (error) {
      console.error("Error fetching property by ID:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
