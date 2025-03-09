import { Request, Response } from "express";
import prisma from "../../prisma";

export class PropertyReportController {
  async getPropertyAvailability(req: Request, res: Response): Promise<void> {
    const { tenantId } = req.query;

    try {
      if (!tenantId) {
        res.status(400).send({ error: "tenantId is required" });
        return;
      }

      const properties = await prisma.property.findMany({
        where: { tenantId: tenantId as string },
        include: {
          RoomTypes: {
            include: {
              RoomAvailability: true,
            },
          },
        },
      });

      res.status(200).send(properties);
    } catch (error) {
      console.error("Error fetching property availability:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
}
