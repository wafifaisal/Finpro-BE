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
exports.AuthTenantController = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const AuthHelpers_1 = require("../../utils/AuthHelpers");
const tenant_service_1 = require("../../services/tenant.service");
class AuthTenantController {
    registerTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!email)
                    throw new Error("Email is required");
                const exists = yield prisma_1.default.tenant.findUnique({ where: { email } });
                if (exists)
                    throw new Error("Email has already been used");
                const newTenant = yield prisma_1.default.tenant.create({
                    data: { name: "", no_handphone: null, email },
                });
                const token = (0, AuthHelpers_1.generateToken)({ id: newTenant.id });
                const link = `${AuthHelpers_1.base_url_fe}/auth/tenant/verify-tenant/${token}`;
                yield (0, AuthHelpers_1.sendEmail)("verifyTenant.hbs", { linkTenant: link }, email, "Selamat Datang di NGINEPIN, Verifikasi Tenant");
                res.status(201).json({ message: "Registrasi Berhasil!, Cek Email kamu" });
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
    loginTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                if (!data || !password) {
                    res.status(400).send({ message: "Data and password are required!" });
                    return;
                }
                const tenant = yield (0, tenant_service_1.findTenant)(data, data);
                if (!tenant) {
                    res.status(404).send({ message: "Tenant not found!" });
                    return;
                }
                if (!tenant.isVerify) {
                    res.status(403).send({ message: "Tenant is not verified!" });
                    return;
                }
                if (!(yield (0, bcrypt_1.compare)(password, tenant.password))) {
                    res.status(401).send({ message: "Password Salah" });
                    return;
                }
                const token = (0, AuthHelpers_1.generateToken)({ id: tenant.id, type: "tenant" });
                res.status(200).json({ message: "Login successful!", token });
            }
            catch (err) {
                res.status(500).send({ message: "An unexpected error occurred." });
            }
        });
    }
    verifyTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const { name, password, confirmPassword, no_handphone } = req.body;
                if (!password || password !== confirmPassword)
                    throw new Error("Passwords do not match!");
                if (yield prisma_1.default.tenant.findUnique({ where: { no_handphone } }))
                    throw new Error("Phone number has already been used!");
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!(decoded === null || decoded === void 0 ? void 0 : decoded.id))
                    throw new Error("Invalid or expired token!");
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: decoded.id },
                });
                if (!tenant)
                    throw new Error("Tenant not found!");
                if (tenant.isVerify)
                    throw new Error("Tenant already verified!");
                const hashed = yield (0, AuthHelpers_1.hashPassword)(password);
                yield prisma_1.default.tenant.update({
                    where: { id: tenant.id },
                    data: { name, password: hashed, isVerify: true, no_handphone },
                });
                res.status(200).send({ message: "Verification successful!" });
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    socialLoginTenant(req, res) {
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
                let tenant = yield prisma_1.default.tenant.findUnique({
                    where: { email: payload.email },
                });
                let message;
                if (!tenant) {
                    tenant = yield prisma_1.default.tenant.create({
                        data: {
                            name: payload.name || "",
                            no_handphone: null,
                            email: payload.email,
                            googleId: payload.sub,
                            avatar: payload.picture,
                            isVerify: true,
                        },
                    });
                    message = "User successfully registered and logged in";
                }
                else if (!tenant.googleId) {
                    throw new Error("User is already registered");
                }
                else {
                    message = "User already registered and logged in";
                }
                const token = (0, AuthHelpers_1.generateToken)({ id: tenant.id, type: "tenant" });
                res.status(200).send({
                    message,
                    token,
                    user: {
                        id: tenant.id,
                        email: tenant.email,
                        name: tenant.name,
                        avatar: tenant.avatar,
                    },
                });
            }
            catch (err) {
                res.status(400).send({ message: err.message || "Login failed" });
            }
        });
    }
    forgotPasswordTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const tenant = yield prisma_1.default.tenant.findUnique({ where: { email } });
                if (!tenant) {
                    res.status(404).send({ message: "Email not found!" });
                    return;
                }
                const token = (0, AuthHelpers_1.generateToken)({ id: tenant.id, email: tenant.email }, "1h");
                const resetLink = `${AuthHelpers_1.base_url_fe}/auth/tenant/login/reset-password/${token}`;
                yield (0, AuthHelpers_1.sendEmail)("forgotPassword.hbs", { name: tenant.name, resetLink }, email, "Password Reset Request");
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
    resetPasswordTenant(req, res) {
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
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: decoded.id },
                });
                if (!tenant) {
                    res.status(404).send({ message: "Tenant not found!" });
                    return;
                }
                const hashed = yield (0, AuthHelpers_1.hashPassword)(newPassword);
                yield prisma_1.default.tenant.update({
                    where: { id: tenant.id },
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
exports.AuthTenantController = AuthTenantController;
//# sourceMappingURL=authtenant.controller.js.map