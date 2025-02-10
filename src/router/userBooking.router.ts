import { Router } from "express";
import { UserBookingController } from "../controller/booking/userBooking.controller";

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
  }

  public getRouter(): Router {
    return this.router;
  }
}
