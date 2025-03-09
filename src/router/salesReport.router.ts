import { Router } from "express";
import { SalesReportController } from "../controller/report/salesReport.controller";

export class SalesReportRouter {
  private salesReportController = new SalesReportController();
  private router = Router();

  constructor() {
    this.salesReportController = new SalesReportController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.salesReportController.getSalesReport);
  }

  public getRouter(): Router {
    return this.router;
  }
}
