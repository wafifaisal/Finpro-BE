import { Router } from "express";
import { PropertyReportController } from "../controller/report/propertyReport.controller";

export class PropertyReportRouter {
  private propertyReportController = new PropertyReportController();
  private router = Router();

  constructor() {
    this.propertyReportController = new PropertyReportController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.propertyReportController.getPropertyAvailability);
  }

  public getRouter(): Router {
    return this.router;
  }
}
