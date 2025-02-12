import { Router } from "express";
import { AuthController } from "../controller/feature1/auth/auth.controller";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/login", this.authController.loginUser);
    this.router.post("/register", this.authController.registerUser);
    this.router.post("/social-login", this.authController.socialLogin);
    this.router.post("/forgotPassword", this.authController.forgotPasswordUser);
    this.router.post(
      "/resetPassword/:token",
      this.authController.resetPasswordUser
    );
    this.router.patch("/verifyuser/:token", this.authController.verifyUser);

    this.router.get("/session", this.authController.getSession);

    this.router.post("/tenant-register", this.authController.registerTenant);
    this.router.post("/tenant-login", this.authController.loginTenant);
    this.router.post(
      "/social-login-tenant",
      this.authController.socialLoginTenant
    );

    this.router.patch(
      "/verify-tenant/:token",
      this.authController.verifyTenant
    );

    this.router.post(
      "/tenant/forgot-password",
      this.authController.forgotPasswordTenant
    );
    this.router.post(
      "/tenant/reset-password/:token",
      this.authController.resetPasswordTenant
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
