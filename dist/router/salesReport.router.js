"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesReportRouter = void 0;
const express_1 = require("express");
const salesReport_controller_1 = require("../controller/report/salesReport.controller");
class SalesReportRouter {
    constructor() {
        this.salesReportController = new salesReport_controller_1.SalesReportController();
        this.router = (0, express_1.Router)();
        this.salesReportController = new salesReport_controller_1.SalesReportController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.salesReportController.getSalesReport);
    }
    getRouter() {
        return this.router;
    }
}
exports.SalesReportRouter = SalesReportRouter;
//# sourceMappingURL=salesReport.router.js.map