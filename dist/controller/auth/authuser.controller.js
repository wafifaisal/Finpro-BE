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
exports.AuthUserController = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const AuthHelpers_1 = require("../../utils/AuthHelpers");
const user_service_1 = require("../../services/user.service");
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
class AuthUserController {
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const user = yield (0, user_service_1.findUser)(data, data);
                if (!user)
                    throw new Error("User not found!");
                if (!user.isVerify)
                    throw new Error("User not verified!");
                if (!(yield (0, bcrypt_1.compare)(password, user.password)))
                    throw new Error("Password Salah");
                const token = (0, AuthHelpers_1.generateToken)({ id: user.id, type: "user" });
                res.status(200).send({ message: "Login successful", token });
            }
            catch (err) {
                res.status(400).send({ message: "Login failed", error: err.message });
            }
        });
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!email)
                    throw new Error("Email is required");
                const exists = yield prisma_1.default.user.findUnique({ where: { email } });
                if (exists)
                    throw new Error("Email has already been used");
                const newUser = yield prisma_1.default.user.create({
                    data: { username: "", no_handphone: null, email },
                });
                const token = (0, AuthHelpers_1.generateToken)({ id: newUser.id });
                const link = `${base_url_fe}/auth/user/verifyUser/${token}`;
                yield (0, AuthHelpers_1.sendEmail)("verifyUser.hbs", { linkUser: link }, email, "Welcome To NGINEPIN");
                res.status(201).json({ message: "Registrasi Berhasil, Cek Email anda" });
            }
            catch (err) {
                res
                    .status(400)
                    .json({ message: "Internal server error", error: err.message });
            }
        });
    }
    verifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const { username, password, confirmPassword, no_handphone } = req.body;
                if (!password || password !== confirmPassword)
                    throw new Error("Passwords do not match!");
                if (yield prisma_1.default.user.findUnique({ where: { no_handphone } }))
                    throw new Error("Phone number has already been used!");
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!(decoded === null || decoded === void 0 ? void 0 : decoded.id))
                    throw new Error("Invalid or expired token!");
                const user = yield prisma_1.default.user.findUnique({ where: { id: decoded.id } });
                if (!user)
                    throw new Error("User not found!");
                if (user.isVerify)
                    throw new Error("User already verified!");
                const hashed = yield (0, AuthHelpers_1.hashPassword)(password);
                yield prisma_1.default.user.update({
                    where: { id: decoded.id },
                    data: { username, password: hashed, isVerify: true, no_handphone },
                });
                res.status(200).send({ message: "Akun berhasil diverifikasi!" });
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    socialLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tokenId } = req.body;
                if (!tokenId)
                    throw new Error("Token ID is required");
                const ticket = yield AuthHelpers_1.googleClient.verifyIdToken({
                    idToken: tokenId,
                    audience: process.env.GOOGLE_CLIENT_ID,
                });
                const payload = ticket.getPayload();
                if (!payload || !payload.email)
                    throw new Error("Invalid Google token");
                let user = yield prisma_1.default.user.findUnique({
                    where: { email: payload.email },
                });
                let message;
                if (!user) {
                    user = yield prisma_1.default.user.create({
                        data: {
                            username: payload.name || "",
                            no_handphone: null,
                            email: payload.email,
                            googleId: payload.sub,
                            avatar: payload.picture,
                            isVerify: true,
                        },
                    });
                    message = "User successfully registered and logged in";
                }
                else if (!user.googleId) {
                    throw new Error("User is already registered");
                }
                else {
                    message = "User already registered and logged in";
                }
                const token = (0, AuthHelpers_1.generateToken)({ id: user.id, type: "user" });
                res.status(200).send({
                    message,
                    token,
                    user: {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        avatar: user.avatar,
                    },
                });
            }
            catch (err) {
                res.status(400).send({ message: err.message || "Login failed" });
            }
        });
    }
    forgotPasswordUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const user = yield prisma_1.default.user.findUnique({ where: { email } });
                if (!user) {
                    res.status(404).send({ message: "Email not found!" });
                    return;
                }
                const token = (0, AuthHelpers_1.generateToken)({ id: user.id, email: user.email }, "1h");
                const resetLink = `${base_url_fe}/auth/user/login/reset-password/${token}`;
                yield (0, AuthHelpers_1.sendEmail)("forgotPassword.hbs", { username: user.username, resetLink }, email, "Password Reset Request");
                res
                    .status(200)
                    .send({ message: "Password reset link sent to your email!" });
            }
            catch (err) {
                res
                    .status(500)
                    .send({ message: "An error occurred while sending the reset link." });
            }
        });
    }
    resetPasswordUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token, newPassword, confirmPassword } = req.body;
                if (!token) {
                    res.status(400).send({ message: "Token is required!" });
                    return;
                }
                if (newPassword !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return;
                }
                let decoded;
                try {
                    decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                }
                catch (e) {
                    res.status(400).send({ message: "Invalid or expired token!" });
                    return;
                }
                const user = yield prisma_1.default.user.findUnique({ where: { id: decoded.id } });
                if (!user) {
                    res.status(404).send({ message: "User not found!" });
                    return;
                }
                const hashed = yield (0, AuthHelpers_1.hashPassword)(newPassword);
                yield prisma_1.default.user.update({
                    where: { id: user.id },
                    data: { password: hashed },
                });
                res
                    .status(200)
                    .send({ message: "Password has been reset successfully!" });
            }
            catch (err) {
                res.status(500).send({ message: "An internal server error occurred!" });
            }
        });
    }
}
exports.AuthUserController = AuthUserController;
