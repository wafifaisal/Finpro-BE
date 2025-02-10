import { Request, Response } from "express";
import prisma from "../../prisma";

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
                // Include the unavailable dates
                select: {
                  start_date: true,
                  end_date: true,
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
          isAvailable: true, // Include the availability status
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
}
