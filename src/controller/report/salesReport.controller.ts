import { Request, Response } from "express";
import prisma from "../../prisma";

export class SalesReportController {
  async getSalesReport(req: Request, res: Response): Promise<void> {
    const { tenantId, startDate, endDate, sortBy } = req.query;

    try {
      if (!tenantId) {
        res.status(400).send({ error: "tenantId is required" });
        return;
      }

      let whereCondition: any = {
        room_types: { property: { tenantId: tenantId as string } },
        status: "completed",
      };

      if (startDate && endDate) {
        whereCondition.created_at = {
          gte: new Date(startDate as string),
          lte: new Date(endDate as string),
        };
      }

      let orderBy = {};
      if (sortBy === "date") orderBy = { created_at: "desc" };
      if (sortBy === "total_penjualan") orderBy = { total_price: "desc" };

      const salesReport = await prisma.booking.findMany({
        where: whereCondition,
        include: {
          user: true,
          room_types: { include: { property: true } },
        },
        orderBy,
      });

      res.status(200).send(salesReport);
    } catch (error) {
      console.error("Error fetching sales report:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
}
