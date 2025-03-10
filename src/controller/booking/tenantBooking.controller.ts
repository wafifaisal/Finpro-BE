import { Request, Response } from "express";
import {
  getTenantBookings,
  updateBookingStatus,
  resendBookingConfirmation,
  cancelTenantBooking,
  getTenantExpenditure,
  countTenantReviews,
} from "../../services/tenantBookingService";

export class TenantBookingController {
  async getTenantBookings(req: Request, res: Response): Promise<void> {
    try {
      const { tenantId } = req.params;
      const status = req.query.status as string | undefined;
      const search = req.query.search as string | undefined;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;

      const result = await getTenantBookings({
        tenantId,
        status,
        search,
        page,
      });
      res.status(200).json(result);
    } catch (error: any) {
      console.error(error);
      const statusCode = error.message === "Invalid booking status" ? 400 : 500;
      res
        .status(statusCode)
        .json({ error: error.message || "Internal server error" });
    }
  }

  async updateBookingStatus(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;
      const { status } = req.body;
      await updateBookingStatus({ bookingId, status });
      res.status(200).json({ message: `Booking status updated to ${status}` });
    } catch (error: any) {
      console.error(error);
      const statusCode = error.message === "Invalid status update" ? 400 : 500;
      res
        .status(statusCode)
        .json({ error: error.message || "Internal server error" });
    }
  }

  async resendBookingConfirmation(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;
      await resendBookingConfirmation(bookingId);
      res
        .status(200)
        .json({ message: "Confirmation email resent successfully" });
    } catch (error: any) {
      console.error(error);
      // If booking is not found or not completed, send 400; otherwise 500
      const statusCode =
        error.message === "Booking not found" ||
        error.message === "Booking is not completed yet"
          ? 400
          : 500;
      res
        .status(statusCode)
        .json({ error: error.message || "Failed to resend email" });
    }
  }

  async cancelTenantBooking(req: Request, res: Response): Promise<void> {
    try {
      const { bookingId } = req.params;
      const { tenantId } = req.body;
      await cancelTenantBooking({ bookingId, tenantId });
      res.status(200).send({ message: "Booking canceled successfully" });
    } catch (error: any) {
      console.error(error);
      let statusCode = 500;
      if (error.message === "Booking not found") statusCode = 404;
      else if (
        error.message === "Unauthorized to cancel this booking" ||
        error.message === "Only 'new' bookings (unpaid) can be canceled"
      )
        statusCode = 400;
      res
        .status(statusCode)
        .send({ error: error.message || "Internal server error" });
    }
  }

  async getTenantExpenditure(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.tenant?.id;
      if (!tenantId) {
        res.status(400).json({ error: "Tenant ID not provided" });
        return;
      }
      const totalExpenditure = await getTenantExpenditure(tenantId);
      res.status(200).json({ totalExpenditure });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async countTenantReviews(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.tenant?.id;
      if (!tenantId) {
        res.status(400).json({ error: "Tenant ID not provided" });
        return;
      }
      const { totalReviews, avgRating } = await countTenantReviews(tenantId);
      res.status(200).send({ totalReviews, avgRating });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message || "Internal server error" });
    }
  }
}
