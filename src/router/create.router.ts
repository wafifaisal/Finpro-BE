import { Router } from "express";
import { CreateController } from "../controller/create_property/create.controller";
import { verifyTokenTenant } from "../middleware/verify.tenant";
import { upload } from "..";

export class CreateRouter {
  private createController: CreateController;
  private router: Router;

  constructor() {
    this.createController = new CreateController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/property",
      verifyTokenTenant,
      upload.array("files", 10),
      this.createController.CreateProperty
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
