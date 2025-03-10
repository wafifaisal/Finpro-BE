import { Router } from "express";
import { UserBookingController } from "../controller/booking/userBooking.controller";
import { uploader } from "../services/uploader";
import { verifyTokenUser } from "../middleware/verify.user";

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
    this.router.get(
      "/count-booking",
      verifyTokenUser,
      this.userBookingController.getUserBookingCount
    );
    this.router.get(
      "/total-expenditure",
      verifyTokenUser,
      this.userBookingController.getUserTotalExpenditure
    );
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
      "/list",
      verifyTokenUser,
      this.userBookingController.getUserBookings
    );
    this.router.get("/:bookingId", this.userBookingController.getBooking);
  }

  public getRouter(): Router {
    return this.router;
  }
}
