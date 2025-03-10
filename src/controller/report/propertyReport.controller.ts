import { Request, Response } from "express";
import prisma from "../../prisma";
import dayjs from "dayjs";

export class PropertyReportController {
  async getPropertyAvailability(req: Request, res: Response): Promise<void> {
    const { tenantId, startDate, endDate } = req.query;

    if (!tenantId) {
      res.status(400).send({ error: "tenantId is required" });
      return;
    }

    const start = startDate
      ? dayjs(startDate as string)
      : dayjs().startOf("day");
    const end = endDate
      ? dayjs(endDate as string)
      : dayjs().add(30, "day").endOf("day");

    const dateRange: string[] = [];
    let current = start.clone();
    while (current.isBefore(end) || current.isSame(end, "day")) {
      dateRange.push(current.format("YYYY-MM-DD"));
      current = current.add(1, "day");
    }

    const properties = await prisma.property.findMany({
      where: { tenantId: tenantId as string },
      include: {
        RoomTypes: {
          select: {
            stock: true,
            RoomAvailability: {
              where: {
                date: {
                  gte: start.toDate(),
                  lte: end.toDate(),
                },
              },
            },
          },
        },
      },
    });

    const aggregatedMap: Record<
      string,
      { date: string; available: number; booked: number; total: number }
    > = {};
    dateRange.forEach((dateKey) => {
      aggregatedMap[dateKey] = {
        date: dateKey,
        available: 0,
        booked: 0,
        total: 0,
      };
    });

    properties.forEach((property) => {
      property.RoomTypes.forEach((roomType: any) => {
        const totalRooms = roomType.stock;
        dateRange.forEach((dateKey) => {
          const record = roomType.RoomAvailability.find(
            (r: any) => dayjs(r.date).format("YYYY-MM-DD") === dateKey
          );
          let available: number, booked: number;
          if (record) {
            available = record.availableCount;
            booked = totalRooms - record.availableCount;
          } else {
            available = totalRooms;
            booked = 0;
          }
          aggregatedMap[dateKey].available += available;
          aggregatedMap[dateKey].booked += booked;
          aggregatedMap[dateKey].total += totalRooms;
        });
      });
    });

    const aggregatedData = Object.values(aggregatedMap);
    res.status(200).send(aggregatedData);
  }
}
