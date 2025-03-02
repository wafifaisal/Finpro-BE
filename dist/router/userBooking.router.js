"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookingRouter = void 0;
const express_1 = require("express");
const userBooking_controller_1 = require("../controller/booking/userBooking.controller");
const uploader_1 = require("../services/uploader");
const verify_user_1 = require("../middleware/verify.user");
class UserBookingRouter {
    constructor() {
        this.userBookingController = new userBooking_controller_1.UserBookingController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.userBookingController.newBooking);
        this.router.get("/count-booking", verify_user_1.verifyTokenUser, this.userBookingController.getUserBookingCount);
        this.router.patch("/payment-proof", (0, uploader_1.uploader)("memoryStorage", "payment-proof").single("paymentProof"), this.userBookingController.uploadPaymentProof);
        this.router.post("/cancel-booking", this.userBookingController.cancelBooking);
        this.router.post("/payment/midtrans", this.userBookingController.getSnapToken);
        this.router.post("/payment/webhook", this.userBookingController.midtransWebHook);
        this.router.get("/list", verify_user_1.verifyTokenUser, this.userBookingController.getUserBookings);
        this.router.get("/:bookingId", this.userBookingController.getBooking);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserBookingRouter = UserBookingRouter;
//# sourceMappingURL=userBooking.router.js.map