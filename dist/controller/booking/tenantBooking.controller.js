"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBookingController = void 0;
const tenantBookingService_1 = require("../../services/tenantBookingService");
class TenantBookingController {
    getTenantBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tenantId } = req.params;
                const status = req.query.status;
                const search = req.query.search;
                const page = req.query.page ? parseInt(req.query.page, 10) : 1;
                const result = yield (0, tenantBookingService_1.getTenantBookings)({
                    tenantId,
                    status,
                    search,
                    page,
                });
                res.status(200).json(result);
            }
            catch (error) {
                console.error(error);
                const statusCode = error.message === "Invalid booking status" ? 400 : 500;
                res
                    .status(statusCode)
                    .json({ error: error.message || "Internal server error" });
            }
        });
    }
    updateBookingStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
                const { status } = req.body;
                yield (0, tenantBookingService_1.updateBookingStatus)({ bookingId, status });
                res.status(200).json({ message: `Booking status updated to ${status}` });
            }
            catch (error) {
                console.error(error);
                const statusCode = error.message === "Invalid status update" ? 400 : 500;
                res
                    .status(statusCode)
                    .json({ error: error.message || "Internal server error" });
            }
        });
    }
    resendBookingConfirmation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
                yield (0, tenantBookingService_1.resendBookingConfirmation)(bookingId);
                res
                    .status(200)
                    .json({ message: "Confirmation email resent successfully" });
            }
            catch (error) {
                console.error(error);
                // If booking is not found or not completed, send 400; otherwise 500
                const statusCode = error.message === "Booking not found" ||
                    error.message === "Booking is not completed yet"
                    ? 400
                    : 500;
                res
                    .status(statusCode)
                    .json({ error: error.message || "Failed to resend email" });
            }
        });
    }
    cancelTenantBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bookingId } = req.params;
                const { tenantId } = req.body;
                yield (0, tenantBookingService_1.cancelTenantBooking)({ bookingId, tenantId });
                res.status(200).send({ message: "Booking canceled successfully" });
            }
            catch (error) {
                console.error(error);
                let statusCode = 500;
                if (error.message === "Booking not found")
                    statusCode = 404;
                else if (error.message === "Unauthorized to cancel this booking" ||
                    error.message === "Only 'new' bookings (unpaid) can be canceled")
                    statusCode = 400;
                res
                    .status(statusCode)
                    .send({ error: error.message || "Internal server error" });
            }
        });
    }
    getTenantExpenditure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                if (!tenantId) {
                    res.status(400).json({ error: "Tenant ID not provided" });
                    return;
                }
                const totalExpenditure = yield (0, tenantBookingService_1.getTenantExpenditure)(tenantId);
                res.status(200).json({ totalExpenditure });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    countTenantReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                if (!tenantId) {
                    res.status(400).json({ error: "Tenant ID not provided" });
                    return;
                }
                const { totalReviews, avgRating } = yield (0, tenantBookingService_1.countTenantReviews)(tenantId);
                res.status(200).send({ totalReviews, avgRating });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ error: error.message || "Internal server error" });
            }
        });
    }
}
exports.TenantBookingController = TenantBookingController;
//# sourceMappingURL=tenantBooking.controller.js.map