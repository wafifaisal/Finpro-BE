import { Router } from "express";
import { verifyTokenUser } from "../middleware/verify.user";
import { uploader } from "../services/uploader";
import { UserController } from "../controller/user/user.controller";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.userController.getUser);
    this.router.patch(
      "/update-email",
      verifyTokenUser,
      this.userController.updateEmail
    );
    this.router.patch(
      "/resend-verification/:token",
      verifyTokenUser,
      this.userController.verifyEmail
    );

    this.router.patch(
      "/update-password",
      verifyTokenUser,
      this.userController.updatePassword
    );

    this.router.patch(
      "/avatar-cloud",
      verifyTokenUser,
      uploader("memoryStorage", "avatar").single("file"),
      this.userController.editAvatarUser
    );

    this.router.get(
      "/profile",
      verifyTokenUser,
      this.userController.getUserProfile
    );

    this.router.delete("/:id", this.userController.deleteUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
