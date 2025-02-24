import { Request, Response } from "express";
import prisma from "../../prisma";
import { uploadImages } from "../../services/ImageServices";
import {
  parseFacilities,
  parseSeasonalPrices,
  parseUnavailable,
} from "../../utils/ParseUtils";
import { computeRecurringDates } from "../../services/computeRecurringDates";


export class CreateRoomTypeController {
  async createRoomType(req: Request, res: Response): Promise<void> {
    try {
      const imgs = await uploadImages(
        req.files as Express.Multer.File[],
        "room"
      );
      const pid = parseInt(req.params.property_id, 10);
      if (isNaN(pid)) {
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
        seasonal_prices,
        unavailable,
      } = req.body;
      const facs = parseFacilities(facilities);
      const seas = parseSeasonalPrices(seasonal_prices);
      const unav = parseUnavailable(unavailable);

      const seasonalPricesData: any[] = [];
      seas.forEach((sp: any) => {
        // Jika apply_weekend atau apply_holiday aktif dan nilai start_date & end_date tersedia,
        // gunakan nilai tersebut sebagai acuan untuk menghitung recurring dates.
        if (
          (sp.apply_weekend || sp.apply_holiday) &&
          sp.start_date &&
          sp.end_date
        ) {
          // Hitung tanggal musiman berdasarkan nilai start_date dan end_date yang dikirim dari frontend
          const computedDatesISO = computeRecurringDates(
            sp.start_date,
            sp.end_date,
            !!sp.apply_weekend,
            !!sp.apply_holiday
          );
          if (computedDatesISO.length > 0) {
            // Konversi ISO string menjadi objek Date
            const computedDates: Date[] = computedDatesISO.map(
              (d: string) => new Date(d)
            );
            seasonalPricesData.push({
              price: parseFloat(sp.price),
              start_date: computedDates[0],
              end_date: computedDates[computedDates.length - 1],
              apply_weekend: !!sp.apply_weekend,
              apply_holiday: !!sp.apply_holiday,
              dates: computedDates,
            });
            return;
          }
        }
        // Fallback: jika kondisi di atas tidak terpenuhi, gunakan nilai yang dikirim dari frontend
        seasonalPricesData.push({
          price: parseFloat(sp.price),
          start_date: new Date(sp.start_date),
          end_date: new Date(sp.end_date),
          apply_weekend: !!sp.apply_weekend,
          apply_holiday: !!sp.apply_holiday,
          dates:
            sp.dates && Array.isArray(sp.dates)
              ? sp.dates
                  .map((d: string) => new Date(d))
                  .filter((d: Date) => !isNaN(d.getTime()))
              : [],
        });
      });


      const room = await prisma.roomTypes.create({
        data: {
          name,
          stock: parseInt(stock, 10),
          price: parseInt(price, 10),
          capacity: parseInt(capacity, 10),
          bed_details,
          has_breakfast: has_breakfast === "true" || has_breakfast === true,
          breakfast_price: parseInt(breakfast_price, 10),
          property: { connect: { id: pid } },
          RoomImages: { create: imgs },
          facilities: facs,
          seasonal_prices: { create: seasonalPricesData },

          Unavailable: {
            create: unav.map((u: any) => ({
              start_date: new Date(u.start_date),
              end_date: new Date(u.end_date),
            })),
          },
        },
      });
      res.status(201).json(room);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async editRoomType(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.roomtype_id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid room type ID" });
        return;
      }
      const imgs =
        req.files && Array.isArray(req.files) && req.files.length
          ? await uploadImages(req.files as Express.Multer.File[], "room")
          : null;
      const facs = req.body.facilities
        ? parseFacilities(req.body.facilities)
        : null;
      const {
        name,
        stock,
        price,
        capacity,
        bed_details,
        has_breakfast,
        breakfast_price,
        seasonal_prices,
        unavailable,
      } = req.body;
      let data: any = {
        ...(name && { name }),
        ...(stock && { stock: parseInt(stock, 10) }),
        ...(price && { price: parseInt(price, 10) }),
        ...(capacity && { capacity: parseInt(capacity, 10) }),
        ...(bed_details && { bed_details }),
        ...(typeof has_breakfast !== "undefined" && {
          has_breakfast: has_breakfast === "true" || has_breakfast === true,
        }),
        ...(breakfast_price && {
          breakfast_price: parseInt(breakfast_price, 10),
        }),
        ...(facs && { facilities: facs }),
      };
      if (imgs) {
        await prisma.roomImages.deleteMany({ where: { room_types_id: id } });
        data.RoomImages = { create: imgs };
      }
      if (seasonal_prices) {
        const seas = parseSeasonalPrices(seasonal_prices);
        await prisma.seasonal_prices.deleteMany({
          where: { room_typesId: id },
        });
        const seasonalPricesData: any[] = [];
        seas.forEach((sp: any) => {
          if (
            (sp.apply_weekend || sp.apply_holiday) &&
            sp.start_date &&
            sp.end_date
          ) {
            const computedDatesISO = computeRecurringDates(
              sp.start_date,
              sp.end_date,
              !!sp.apply_weekend,
              !!sp.apply_holiday
            );
            if (computedDatesISO.length > 0) {
              const computedDates: Date[] = computedDatesISO.map(
                (d: string) => new Date(d)
              );
              seasonalPricesData.push({
                price: parseFloat(sp.price),
                start_date: computedDates[0],
                end_date: computedDates[computedDates.length - 1],
                apply_weekend: !!sp.apply_weekend,
                apply_holiday: !!sp.apply_holiday,
                dates: computedDates,
              });
              return;
            }
          }
          seasonalPricesData.push({

            price: parseFloat(sp.price),
            start_date: new Date(sp.start_date),
            end_date: new Date(sp.end_date),
            apply_weekend: !!sp.apply_weekend,
            apply_holiday: !!sp.apply_holiday,
            dates:
              sp.dates && Array.isArray(sp.dates)
                ? sp.dates
                    .map((d: string) => new Date(d))
                    .filter((d: Date) => !isNaN(d.getTime()))
                : [],
          });
        });
        data.seasonal_prices = { create: seasonalPricesData };

      }
      if (unavailable) {
        const unav = parseUnavailable(unavailable);
        await prisma.unavailable.deleteMany({ where: { room_types_id: id } });
        data.Unavailable = {
          create: unav.map((u: any) => ({
            start_date: new Date(u.start_date),
            end_date: new Date(u.end_date),
          })),
        };
      }
      const upd = await prisma.roomTypes.update({ where: { id }, data });
      res
        .status(200)
        .json({ message: "Room type updated successfully", room: upd });
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async deleteRoomType(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.roomtype_id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid room type ID" });
        return;
      }
      const room = await prisma.roomTypes.findUnique({ where: { id } });
      if (!room) {
        res.status(404).json({ message: "Room type not found" });
        return;
      }
      await prisma.roomImages.deleteMany({ where: { room_types_id: id } });
      await prisma.seasonal_prices.deleteMany({ where: { room_typesId: id } });
      await prisma.unavailable.deleteMany({ where: { room_types_id: id } });

      await prisma.roomTypes.delete({ where: { id } });
      res.status(200).json({ message: "Room type deleted successfully" });
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
