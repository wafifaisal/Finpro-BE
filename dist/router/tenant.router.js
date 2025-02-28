"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRouter = void 0;
const express_1 = require("express");
const uploader_1 = require("../services/uploader");
const tenant_controller_1 = require("../controller/user/tenant.controller");
const verify_tenant_1 = require("../middleware/verify.tenant");
class TenantRouter {
    constructor() {
        this.tenantController = new tenant_controller_1.TenantController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/count-properties/:tenantId", this.tenantController.getTenantPropertyCount);
        this.router.get("/", this.tenantController.getTenant);
        this.router.get("/properties", verify_tenant_1.verifyTokenTenant, this.tenantController.getTenantProperties);
        this.router.patch("/update-password", verify_tenant_1.verifyTokenTenant, this.tenantController.updatePassword);
        this.router.patch("/avatar-cloud", verify_tenant_1.verifyTokenTenant, (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.tenantController.editAvatarTenant);
        this.router.get("/profile", verify_tenant_1.verifyTokenTenant, this.tenantController.getTenantProfile);
        this.router.delete("/:id", this.tenantController.deleteTenant);
        this.router.get("/tenant-count", this.tenantController.getTenantCount);
    }
    getRouter() {
        return this.router;
    }
}
exports.TenantRouter = TenantRouter;
