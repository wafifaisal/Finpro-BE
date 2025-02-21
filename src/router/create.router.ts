import { Router } from "express";
import { CreateController } from "../controller/create_property/create.controller";
import { verifyTokenTenant } from "../middleware/verify.tenant";
import { upload } from "..";
import { CreatePropertyController } from "../controller/create_property/property.controller";
import { CreateRoomTypeController } from "../controller/create_property/roomType.controller";

export class CreateRouter {
  // private createController: CreateController;
  private createRoomTypeController: CreateRoomTypeController;
  private createPropertyController: CreatePropertyController;
  private router: Router;

  constructor() {
    // this.createController = new CreateController();
    this.createPropertyController = new CreatePropertyController();
    this.createRoomTypeController = new CreateRoomTypeController();

    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/property",
      verifyTokenTenant,
      upload.array("files", 10),
      this.createPropertyController.createProperty
    );

    this.router.post(
      "/property/:property_id",
      verifyTokenTenant,
      upload.array("files", 10),
      this.createRoomTypeController.createRoomType
    );

    this.router.put(
      "/property/:property_id",
      verifyTokenTenant,
      upload.array("files", 10),
      this.createPropertyController.editProperty
    );

    this.router.delete(
      "/property/:property_id",
      verifyTokenTenant,
      this.createPropertyController.deleteProperty
    );

    this.router.put(
      "/roomtype/:roomtype_id",
      verifyTokenTenant,
      upload.array("files", 10),
      this.createRoomTypeController.editRoomType
    );

    this.router.delete(
      "/roomtype/:roomtype_id",
      verifyTokenTenant,
      this.createRoomTypeController.deleteRoomType
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
