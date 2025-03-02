"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRouter = void 0;
const express_1 = require("express");
const property_controller_1 = require("../controller/property/property.controller");
const verify_tenant_1 = require("../middleware/verify.tenant");
class PropertyRouter {
    constructor() {
        this.propertyController = new property_controller_1.PropertyController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.propertyController.getProperty);
        this.router.get("/suggestions", this.propertyController.getPropertySuggestions);
        this.router.get("/property-count", this.propertyController.getPropertyCount);
        this.router.get("/:id", this.propertyController.GetPropertyById);
        this.router.get("/roomtypes/:property_id/:roomtype_id", verify_tenant_1.verifyTokenTenant, this.propertyController.getRoomTypeById);
        this.router.get("/rooms/:roomId", this.propertyController.getRoomTypes);
        this.router.post("/click", this.propertyController.incrementClickRate);
    }
    getRouter() {
        return this.router;
    }
}
exports.PropertyRouter = PropertyRouter;
//# sourceMappingURL=property.router.js.map