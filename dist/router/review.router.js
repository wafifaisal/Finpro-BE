"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const review_controller_1 = require("../controller/review/review.controller");
const verify_user_1 = require("../middleware/verify.user");
class ReviewRouter {
    constructor() {
        this.reviewController = new review_controller_1.ReviewController();
        this.router = (0, express_1.Router)();
        this.reviewController = new review_controller_1.ReviewController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.reviewController.newReview);
        this.router.get("/:userId", this.reviewController.getUserReviews);
        this.router.delete("/:reviewId", this.reviewController.deleteReview);
        this.router.get("/create/:bookingId", this.reviewController.getBookingById);
        this.router.get("/count/:userId", verify_user_1.verifyTokenUser, this.reviewController.getUserReviewCount);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewRouter = ReviewRouter;
//# sourceMappingURL=review.router.js.map