import { Router } from "express";
import { UserBookingController } from "../controller/booking/userBooking.controller";
import { uploader } from "../services/uploader";

export class UserBookingRouter {
  private userBookingController: UserBookingController;
  private router: Router;

  constructor() {
    this.userBookingController = new UserBookingController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.userBookingController.newBooking);
    this.router.patch(
      "/payment-proof",
      uploader("memoryStorage", "payment-proof").single("paymentProof"),
      this.userBookingController.uploadPaymentProof
    );

    this.router.post(
      "/cancel-booking",
      this.userBookingController.cancelBooking
    );

    this.router.post(
      "/payment/midtrans",
      this.userBookingController.getSnapToken
    );
    this.router.post(
      "/payment/webhook",
      this.userBookingController.midtransWebHook
    );

    this.router.get(
      "/list/:userId",
      this.userBookingController.getUserBookings
    );
    this.router.get("/:bookingId", this.userBookingController.getBooking);
  }

  public getRouter(): Router {
    return this.router;
  }
}
