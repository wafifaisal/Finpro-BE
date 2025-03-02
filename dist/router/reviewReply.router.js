"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewReplyRouter = void 0;
const express_1 = require("express");
const reviewReply_controller_1 = require("../controller/review/reviewReply.controller");
const verify_tenant_1 = require("../middleware/verify.tenant");
class ReviewReplyRouter {
    constructor() {
        this.reviewReplyController = new reviewReply_controller_1.ReviewReplyController();
        this.router = (0, express_1.Router)();
        this.reviewReplyController = new reviewReply_controller_1.ReviewReplyController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.reviewReplyController.createReviewReply);
        this.router.get("/tenant/:tenantId", this.reviewReplyController.getReviewsByTenant);
        this.router.get("/count-reviews/:id", verify_tenant_1.verifyTokenTenant, this.reviewReplyController.countTenantReviews);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewReplyRouter = ReviewReplyRouter;
//# sourceMappingURL=reviewReply.router.js.map