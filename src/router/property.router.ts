import { Router } from "express";
import { PropertyController } from "../controller/feature1/property/property.controller";

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
  }
  public getRouter(): Router {
    return this.router;
  }
}
