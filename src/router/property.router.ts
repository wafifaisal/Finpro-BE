import { Router } from "express";
import { PropertyController } from "../controller/property/property.controller";
import { verifyTokenTenant } from "../middleware/verify.tenant";

export class PropertyRouter {
  private propertyController: PropertyController;
  private router: Router;

  constructor() {
    this.propertyController = new PropertyController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.propertyController.getProperty);
    this.router.get(
      "/suggestions",
      this.propertyController.getPropertySuggestions
    );
    this.router.get(
      "/property-count",
      this.propertyController.getPropertyCount
    );
    this.router.get("/:id", this.propertyController.GetPropertyById);
    this.router.get(
      "/roomtypes/:property_id/:roomtype_id",
      verifyTokenTenant,
      this.propertyController.getRoomTypeById
    );

    this.router.get("/rooms/:roomId", this.propertyController.getRoomTypes);
    this.router.get(
      "/tenant/:tenantId/count-properties",
      this.propertyController.getTenantPropertyCount
    );
    this.router.post("/click", this.propertyController.incrementClickRate);
  }
  public getRouter(): Router {
    return this.router;
  }
}
