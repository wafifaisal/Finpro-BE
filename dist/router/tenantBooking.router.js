"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBookingRouter = void 0;
const express_1 = require("express");
const tenantBooking_controller_1 = require("../controller/booking/tenantBooking.controller");
class TenantBookingRouter {
    constructor() {
        this.tenantBookingController = new tenantBooking_controller_1.TenantBookingController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/:bookingId/cancel-booking", this.tenantBookingController.cancelTenantBooking);
        this.router.get("/:tenantId", this.tenantBookingController.getTenantBookings);
        this.router.patch("/:bookingId/status", this.tenantBookingController.updateBookingStatus);
        this.router.post("/:bookingId/resend-confirmation", this.tenantBookingController.resendBookingConfirmation);
    }
    getRouter() {
        return this.router;
    }
}
exports.TenantBookingRouter = TenantBookingRouter;
//# sourceMappingURL=tenantBooking.router.js.map