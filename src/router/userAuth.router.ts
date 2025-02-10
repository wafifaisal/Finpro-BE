import { Router } from "express";
import { AuthController } from "../controller/auth/auth.controller";

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
    this.router.patch("/verifyuser/:token", this.authController.verifyUser);

    this.router.post("/social-login", this.authController.socialLogin);

    this.router.post("/promotorRegister", this.authController.registerTenant);
    this.router.post("/promotorLogin", this.authController.loginTenant);
    this.router.post(
      "/verifypromotor/:token",
      this.authController.verifyTenant
    );
    this.router.patch(
      "/verifypromotor/:token",
      this.authController.verifyTenant
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
