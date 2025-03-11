import { Router } from "express";
import { ReviewController } from "../controller/review/review.controller";
import { verifyTokenUser } from "../middleware/verify.user";

export class ReviewRouter {
  private reviewController = new ReviewController();
  private router = Router();

  constructor() {
    this.reviewController = new ReviewController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.reviewController.newReview);
    this.router.get("/:userId", this.reviewController.getUserReviews);
    this.router.get("/create/:bookingId", this.reviewController.getBookingById);
    this.router.get(
      "/count/:userId",
      verifyTokenUser,
      this.reviewController.getUserReviewCount
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
