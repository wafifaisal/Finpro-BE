import { Router } from "express";
import { uploader } from "../services/uploader";
import { TenantController } from "../controller/user/tenant.controller";
import { verifyTokenTenant } from "../middleware/verify.tenant";

export class TenantRouter {
  private tenantController: TenantController;
  private router: Router;

  constructor() {
    this.tenantController = new TenantController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.tenantController.getTenant);
    this.router.get(
      "/properties",
      verifyTokenTenant,
      this.tenantController.getTenantProperties
    );

    this.router.patch(
      "/update-password",
      verifyTokenTenant,
      this.tenantController.updatePassword
    );

    this.router.patch(
      "/avatar-cloud",
      verifyTokenTenant,
      uploader("memoryStorage", "avatar").single("file"),
      this.tenantController.editAvatarTenant
    );

    this.router.get(
      "/profile",
      verifyTokenTenant,
      this.tenantController.getTenantProfile
    );

    this.router.delete("/:id", this.tenantController.deleteTenant);
    this.router.get("/tenant-count", this.tenantController.getTenantCount);
  }

  getRouter(): Router {
    return this.router;
  }
}
