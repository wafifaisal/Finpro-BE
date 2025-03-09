import { Router } from "express";
import { ReviewReplyController } from "../controller/review/reviewReply.controller";
import { verifyTokenTenant } from "../middleware/verify.tenant";

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
      "/count-reviews",
      verifyTokenTenant,
      this.reviewReplyController.countTenantReviews
    );

    this.router.get(
      "/tenant/:tenantId",
      this.reviewReplyController.getReviewsByTenant
    );
    this.router.get(
      "/count-reviews/:id",
      verifyTokenTenant,
      this.reviewReplyController.countTenantReviews
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
