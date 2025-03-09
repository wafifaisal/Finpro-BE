"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyReportRouter = void 0;
const express_1 = require("express");
const propertyReport_controller_1 = require("../controller/report/propertyReport.controller");
class PropertyReportRouter {
    constructor() {
        this.propertyReportController = new propertyReport_controller_1.PropertyReportController();
        this.router = (0, express_1.Router)();
        this.propertyReportController = new propertyReport_controller_1.PropertyReportController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.propertyReportController.getPropertyAvailability);
    }
    getRouter() {
        return this.router;
    }
}
exports.PropertyReportRouter = PropertyReportRouter;
//# sourceMappingURL=propertyReport.router.js.map