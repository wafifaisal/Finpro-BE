import { Router } from "express";
import { AuthUserController } from "../controller/auth/authuser.controller";
import { AuthTenantController } from "../controller/auth/authtenant.controller";
import { SessionController } from "../controller/auth/session.controller";

export class AuthRouter {
  private authUserController: AuthUserController;
  private authTenantController: AuthTenantController;
  private sessionController: SessionController;
  private router: Router;

  constructor() {
    this.authUserController = new AuthUserController();
    this.authTenantController = new AuthTenantController();
    this.sessionController = new SessionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Endpoint untuk user
    this.router.post("/login", this.authUserController.loginUser);
    this.router.post("/register", this.authUserController.registerUser);
    this.router.post("/social-login", this.authUserController.socialLogin);
    this.router.post(
      "/forgotPassword",
      this.authUserController.forgotPasswordUser
    );
    this.router.post(
      "/resetPassword/:token",
      this.authUserController.resetPasswordUser
    );
    this.router.patch("/verifyuser/:token", this.authUserController.verifyUser);

    // Endpoint session (user & tenant)
    this.router.get("/session", this.sessionController.getSession);

    // Endpoint untuk tenant
    this.router.post(
      "/tenant-register",
      this.authTenantController.registerTenant
    );
    this.router.post("/tenant-login", this.authTenantController.loginTenant);
    this.router.post(
      "/social-login-tenant",
      this.authTenantController.socialLoginTenant
    );
    this.router.patch(
      "/verify-tenant/:token",
      this.authTenantController.verifyTenant
    );
    this.router.post(
      "/tenant/forgot-password",
      this.authTenantController.forgotPasswordTenant
    );
    this.router.post(
      "/tenant/reset-password/:token",
      this.authTenantController.resetPasswordTenant
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
