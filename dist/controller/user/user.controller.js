"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const cloudinary_1 = require("../../services/cloudinary");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userQueryUtils_1 = require("../../utils/userQueryUtils");
const userEmailUtils_1 = require("../../utils/userEmailUtils");
class UserController {
    constructor() {
        this.updatePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { currentPassword, newPassword } = req.body;
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: { password: true },
                });
                if (!user)
                    throw { message: "User not found" };
                if (!user.password)
                    throw { message: "User password is not available" };
                if (!(yield bcrypt_1.default.compare(currentPassword, user.password)))
                    throw { message: "Current password is incorrect" };
                if (yield bcrypt_1.default.compare(newPassword, user.password))
                    throw {
                        message: "New password cannot be the same as the current password",
                    };
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                yield prisma_1.default.user.update({
                    where: { id: userId },
                    data: { password: hashedPassword },
                });
                res.status(200).json({ message: "Password updated successfully" });
            }
            catch (error) {
                console.error("Error updating password:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = (0, userQueryUtils_1.buildUserFilter)(req.query);
                const { page, limit, skip } = (0, userQueryUtils_1.getPagination)(req.query);
                const countUser = yield prisma_1.default.user.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countUser._count._all / limit);
                const users = yield prisma_1.default.user.findMany({
                    where: filter,
                    orderBy: { createdAt: "asc" },
                    take: limit,
                    skip,
                });
                res.status(200).send({ total_page, page, users });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    getUserProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(400).json({ message: "User ID is missing" });
                    return;
                }
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        avatar: true,
                        createdAt: true,
                        updatedAt: true,
                        isVerify: true,
                        googleId: true,
                    },
                });
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                res.status(200).json(user);
            }
            catch (err) {
                console.error("Error fetching user profile:", err);
                res.status(500).json({ message: "Internal server error", error: err });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.delete({ where: { id } });
                res.status(200).send("User Deleted");
            }
            catch (err) {
                console.error("Error deleting user:", err);
                res.status(400).send(err);
            }
        });
    }
    editAvatarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "File is empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "avatar");
                yield prisma_1.default.user.update({
                    data: { avatar: secure_url },
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ message: "Avatar edited!" });
            }
            catch (err) {
                console.error("Error editing avatar:", err);
                res.status(400).send(err);
            }
        });
    }
    updateEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { email } = req.body;
                const currentUser = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: { email: true, updateEmailTokenVersion: true },
                });
                if (!currentUser) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                if (currentUser.email === email) {
                    res.status(400).json({
                        message: "New email cannot be the same as the current email",
                    });
                    return;
                }
                const payload = {
                    id: userId,
                    newEmail: email,
                    version: currentUser.updateEmailTokenVersion || 0,
                };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const html = (0, userEmailUtils_1.getVerifyEmailHtml)(token);
                yield (0, userEmailUtils_1.sendVerifyEmail)(email, html);
                res.status(200).json({
                    message: "Verification email sent successfully. Please check your inbox.",
                });
            }
            catch (err) {
                console.error("Error updating email:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    verifyEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: decoded.id },
                    select: { updateEmailTokenVersion: true },
                });
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                if (decoded.version !== (user.updateEmailTokenVersion || 0)) {
                    res.status(400).json({
                        message: "Verification token is outdated. Please request a new verification email.",
                    });
                    return;
                }
                yield prisma_1.default.user.update({
                    where: { id: decoded.id },
                    data: {
                        email: decoded.newEmail,
                        updateEmailTokenVersion: (user.updateEmailTokenVersion || 0) + 1,
                    },
                });
                res
                    .status(200)
                    .json({ message: "Email verified and updated successfully!" });
            }
            catch (err) {
                console.error("Error verifying email:", err);
                res.status(500).json({ message: "Invalid or expired token" });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map