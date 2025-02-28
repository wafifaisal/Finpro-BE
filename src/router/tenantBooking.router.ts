import { Router } from "express";
import { TenantBookingController } from "../controller/booking/tenantBooking.controller";

export class TenantBookingRouter {
  private tenantBookingController: TenantBookingController;
  private router: Router;

  constructor() {
    this.tenantBookingController = new TenantBookingController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/:bookingId/cancel-booking",
      this.tenantBookingController.cancelTenantBooking
    );

    this.router.get(
      "/:tenantId",
      this.tenantBookingController.getTenantBookings
    );
    this.router.patch(
      "/:bookingId/status",
      this.tenantBookingController.updateBookingStatus
    );
    this.router.post(
      "/:bookingId/resend-confirmation",
      this.tenantBookingController.resendBookingConfirmation
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
