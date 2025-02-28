import { Request, Response } from "express";
import * as bookingService from "../../services/bookingService";
import * as paymentService from "../../services/paymentService";
import * as uploadService from "../../services/uploadService";
import prisma from "../../prisma";
import { getBookingDetails } from "../../services/GetBookingService";
import { getDatesBetween } from "../../utils/dateUtils";

export class UserBookingController {
  async newBooking(req: Request, res: Response): Promise<void> {
    try {
      const {
        userId,
        roomTypeId,
        numOfGuests,
        quantity,
        startDate,
        endDate,
        paymentMethod,
        add_breakfast,
      } = req.body;

      const newBooking = await bookingService.createBooking({
        userId,
        roomTypeId,
        numOfGuests,
        quantity,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        paymentMethod,
        add_breakfast,
      });
      res.status(201).send({ booking: newBooking });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  }

  async getBooking(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.params;
    try {
      const bookingWithCosts = await getBookingDetails(bookingId);

      if (!bookingWithCosts) {
        res.status(404).send({ error: "Booking not found" });
        return;
      }

      res.status(200).send({ result: bookingWithCosts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getSnapToken(req: Request, res: Response): Promise<void> {
    try {
      const { booking_id } = req.body;
      const token = await paymentService.getSnapTokenService(booking_id);
      res.status(200).json({ result: token });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  }

  async midtransWebHook(req: Request, res: Response): Promise<void> {
    try {
      const { transaction_status, order_id } = req.body;
      await paymentService.handleMidtransWebhook(transaction_status, order_id);
      res.status(200).json({ message: "Booking status updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async uploadPaymentProof(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.body;

    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    try {
      await uploadService.uploadPaymentProofService(bookingId, req.file);
      res.status(200).json({ message: "Payment proof uploaded successfully" });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  }

  async getUserBookings(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 4;
    const skip = (page - 1) * limit;
    const search = req.query.search as string | undefined;
    const status = req.query.status as string | undefined;
    if (!userId) {
      res.status(400).json({ message: "User ID is missing" });
      return;
    }
    const checkInFilter = req.query.checkIn as string | undefined;
    const checkOutFilter = req.query.checkOut as string | undefined;
    const reservationNo = req.query.reservationNo as string | undefined;

    try {
      const whereClause: any = {
        user_id: userId,
        ...(status
          ? { status }
          : { status: { in: ["new", "waiting_payment", "completed"] } }),
      };

      if (search) {
        whereClause.room_types = {
          property: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        };
      }

      if (checkInFilter) {
        whereClause.start_date = { gte: new Date(checkInFilter) };
      }

      if (checkOutFilter) {
        whereClause.end_date = { lte: new Date(checkOutFilter) };
      }

      if (reservationNo) {
        whereClause.id = { startsWith: reservationNo };
      }

      const totalCount = await prisma.booking.count({ where: whereClause });

      const bookings = await prisma.booking.findMany({
        where: whereClause,
        skip,
        take: limit,
        select: {
          id: true,
          quantity: true,
          num_of_guests: true,
          total_price: true,
          details: true,
          start_date: true,
          end_date: true,
          created_at: true,
          updated_at: true,
          payment_proof: true,
          payment_method: true,
          status: true,
          user_id: true,
          room_types_id: true,
          room_types: {
            select: {
              name: true,
              price: true,
              has_breakfast: true,
              breakfast_price: true,
              seasonal_prices: {
                select: {
                  id: true,
                  price: true,
                  start_date: true,
                  end_date: true,
                  dates: true,
                  apply_weekend: true,
                  apply_holiday: true,
                  created_at: true,
                  updated_at: true,
                },
              },
              property: {
                select: {
                  name: true,
                },
              },
              RoomImages: {
                select: {
                  image_url: true,
                },
                take: 1,
              },
            },
          },
          Review: true,
        },
      });

      res.status(200).send({ result: bookings, totalCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async cancelBooking(req: Request, res: Response): Promise<void> {
    const { bookingId } = req.body;

    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
      }

      if (booking.status !== "new") {
        res.status(400).json({
          error:
            "Booking cannot be canceled as it is either already paid or being processed",
        });
        return;
      }

      await prisma.$transaction(async (tx) => {
        await tx.booking.update({
          where: { id: bookingId },
          data: { status: "canceled" },
        });
        const bookingDates = getDatesBetween(
          new Date(booking.start_date),
          new Date(booking.end_date)
        );

        for (const date of bookingDates) {
          const formattedDate = new Date(date.toISOString().split("T")[0]);

          const availability = await tx.roomAvailability.findUnique({
            where: {
              uniqueRoomAvailability: {
                room_typesId: booking.room_types_id,
                date: formattedDate,
              },
            },
          });

          if (availability) {
            await tx.roomAvailability.update({
              where: {
                uniqueRoomAvailability: {
                  room_typesId: booking.room_types_id,
                  date: formattedDate,
                },
              },
              data: { availableCount: { increment: booking.quantity } },
            });
            const updatedAvailability = await tx.roomAvailability.findUnique({
              where: {
                uniqueRoomAvailability: {
                  room_typesId: booking.room_types_id,
                  date: formattedDate,
                },
              },
            });
            if (updatedAvailability && updatedAvailability.availableCount > 0) {
              await tx.unavailable.deleteMany({
                where: {
                  room_types_id: booking.room_types_id,
                  start_date: formattedDate,
                  end_date: formattedDate,
                },
              });
            }
          } else {
            await tx.roomAvailability.create({
              data: {
                room_typesId: booking.room_types_id,
                date: formattedDate,
                availableCount: booking.quantity,
              },
            });
          }
        }
      });

      res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUserBookingCount(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(400).json({ message: "User ID is required" });
        return;
      }
      const totalBooking = await prisma.booking.count({
        where: { user_id: userId },
      });
      res.status(200).json({ totalBooking });
    } catch (err) {
      console.error("Error fetching booking user count:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
