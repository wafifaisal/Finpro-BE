import { Router } from "express";
import { ReviewController } from "../controller/review/review.controller";

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
    this.router.get("/:bookingId", this.reviewController.getReview);
    this.router.delete("/:reviewId", this.reviewController.deleteReview);
  }

  public getRouter(): Router {
    return this.router;
  }
}
