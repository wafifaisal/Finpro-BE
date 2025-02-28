"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const authuser_controller_1 = require("../controller/auth/authuser.controller");
const authtenant_controller_1 = require("../controller/auth/authtenant.controller");
const session_controller_1 = require("../controller/auth/session.controller");
class AuthRouter {
    constructor() {
        this.authUserController = new authuser_controller_1.AuthUserController();
        this.authTenantController = new authtenant_controller_1.AuthTenantController();
        this.sessionController = new session_controller_1.SessionController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/login", this.authUserController.loginUser);
        this.router.post("/register", this.authUserController.registerUser);
        this.router.post("/social-login", this.authUserController.socialLogin);
        this.router.post("/forgotPassword", this.authUserController.forgotPasswordUser);
        this.router.post("/resetPassword/:token", this.authUserController.resetPasswordUser);
        this.router.patch("/verifyuser/:token", this.authUserController.verifyUser);
        this.router.get("/session", this.sessionController.getSession);
        this.router.post("/tenant-register", this.authTenantController.registerTenant);
        this.router.post("/tenant-login", this.authTenantController.loginTenant);
        this.router.post("/social-login-tenant", this.authTenantController.socialLoginTenant);
        this.router.patch("/verify-tenant/:token", this.authTenantController.verifyTenant);
        this.router.post("/tenant/forgot-password", this.authTenantController.forgotPasswordTenant);
        this.router.post("/tenant/reset-password/:token", this.authTenantController.resetPasswordTenant);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
