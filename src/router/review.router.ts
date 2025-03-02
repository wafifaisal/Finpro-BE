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
    this.router.get("/count", this.reviewController.getUserReviewCount);
    this.router.get("/:userId", this.reviewController.getUserReviews);
    this.router.delete("/:reviewId", this.reviewController.deleteReview);
  }

  public getRouter(): Router {
    return this.router;
  }
}
