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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesReportController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class SalesReportController {
    getSalesReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId, startDate, endDate, sortBy } = req.query;
            try {
                if (!tenantId) {
                    res.status(400).send({ error: "tenantId is required" });
                    return;
                }
                let whereCondition = {
                    room_types: { property: { tenantId: tenantId } },
                    status: "completed",
                };
                if (startDate && endDate) {
                    whereCondition.created_at = {
                        gte: new Date(startDate),
                        lte: new Date(endDate),
                    };
                }
                let orderBy = {};
                if (sortBy === "date")
                    orderBy = { created_at: "desc" };
                if (sortBy === "total_penjualan")
                    orderBy = { total_price: "desc" };
                const salesReport = yield prisma_1.default.booking.findMany({
                    where: whereCondition,
                    include: {
                        user: true,
                        room_types: { include: { property: true } },
                    },
                    orderBy,
                });
                res.status(200).send(salesReport);
            }
            catch (error) {
                console.error("Error fetching sales report:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });
    }
}
exports.SalesReportController = SalesReportController;
//# sourceMappingURL=salesReport.controller.js.map