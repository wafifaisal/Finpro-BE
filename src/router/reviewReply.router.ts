import { Router } from "express";
import { ReviewReplyController } from "../controller/review/reviewReply.controller";

export class ReviewReplyRouter {
  private reviewReplyController = new ReviewReplyController();
  private router = Router();

  constructor() {
    this.reviewReplyController = new ReviewReplyController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.reviewReplyController.createReviewReply);
    this.router.get(
      "/tenant/:tenantId",
      this.reviewReplyController.getReviewsByTenant
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
