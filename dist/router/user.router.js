"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const verify_user_1 = require("../middleware/verify.user");
const uploader_1 = require("../services/uploader");
const user_controller_1 = require("../controller/user/user.controller");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.userController.getUser);
        this.router.patch("/update-email", verify_user_1.verifyTokenUser, this.userController.updateEmail);
        this.router.patch("/resend-verification/:token", verify_user_1.verifyTokenUser, this.userController.verifyEmail);
        this.router.patch("/update-password", verify_user_1.verifyTokenUser, this.userController.updatePassword);
        this.router.patch("/avatar-cloud", verify_user_1.verifyTokenUser, (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.userController.editAvatarUser);
        this.router.get("/profile", verify_user_1.verifyTokenUser, this.userController.getUserProfile);
        this.router.delete("/:id", this.userController.deleteUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map