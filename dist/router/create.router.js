"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRouter = void 0;
const express_1 = require("express");
const verify_tenant_1 = require("../middleware/verify.tenant");
const __1 = require("..");
const property_controller_1 = require("../controller/create_property/property.controller");
const roomType_controller_1 = require("../controller/create_property/roomType.controller");
class CreateRouter {
    constructor() {
        this.createPropertyController = new property_controller_1.CreatePropertyController();
        this.createRoomTypeController = new roomType_controller_1.CreateRoomTypeController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/property", verify_tenant_1.verifyTokenTenant, __1.upload.array("files", 10), this.createPropertyController.createProperty);
        this.router.post("/property/:property_id", verify_tenant_1.verifyTokenTenant, __1.upload.array("files", 10), this.createRoomTypeController.createRoomType);
        this.router.put("/property/:property_id", verify_tenant_1.verifyTokenTenant, __1.upload.array("files", 10), this.createPropertyController.editProperty);
        this.router.delete("/property/:property_id", verify_tenant_1.verifyTokenTenant, this.createPropertyController.deleteProperty);
        this.router.put("/roomtype/:roomtype_id", verify_tenant_1.verifyTokenTenant, __1.upload.array("files", 10), this.createRoomTypeController.editRoomType);
        this.router.delete("/roomtype/:roomtype_id", verify_tenant_1.verifyTokenTenant, this.createRoomTypeController.deleteRoomType);
    }
    getRouter() {
        return this.router;
    }
}
exports.CreateRouter = CreateRouter;
