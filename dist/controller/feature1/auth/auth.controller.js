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
exports.AuthController = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const tenant_service_1 = require("../../../services/tenant.service");
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../../../services/mailer");
const user_service_1 = require("../../../services/user.service");
const google_auth_library_1 = require("google-auth-library");
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
const googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
class AuthController {
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const user = yield (0, user_service_1.findUser)(data, data);
                if (!user)
                    throw { message: "User not found!" };
                if (!user.isVerify)
                    throw { message: "User not verified!" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, user.password);
                if (!isValidPass)
                    throw { message: "Incorrect password!" };
                const payload = { id: user.id, type: "user" };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                console.log("Generated Token:", token);
                console.log("Token Payload:", payload);
                res.status(200).send({
                    message: "Login successful",
                    token,
                });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({
                    message: "Login failed",
                });
            }
        });
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!email) {
                    throw new Error("Email is required");
                }
                const user = yield prisma_1.default.user.findUnique({
                    where: { email },
                });
                if (user) {
                    throw { message: "Email has already been used" };
                }
                const newUserData = {
                    username: "",
                    no_handphone: "",
                    email,
                };
                const newUser = yield prisma_1.default.user.create({ data: newUserData });
                const payload = { id: newUser.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const linkUser = `${base_url_fe}/auth/user/verifyUser/${token}`;
                const templatePath = path_1.default.join(__dirname, "../../../templates", "verifyUser.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({
                    linkUser,
                });
                // Mailer transport
                yield mailer_1.transporter.sendMail({
                    from: "wafifaisal19@gmail.com",
                    to: email,
                    subject: "Welcome To NGINEPIN",
                    html,
                });
                res.status(201).json({ message: "Registrasi Berhasil, Cek Email anda" });
            }
            catch (err) {
                console.error(err);
                res.status(400).json({ message: "Internal server error" });
            }
        });
    }
    verifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const { username, password, confirmPassword, no_handphone } = req.body;
                // Validasi password
                if (!password || !confirmPassword || password !== confirmPassword) {
                    throw { message: "Passwords do not match!" };
                }
                const phoneExists = yield prisma_1.default.user.findUnique({
                    where: { no_handphone },
                });
                if (phoneExists) {
                    throw { message: "Phone number has already been used!" };
                }
                // Verifikasi token JWT
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!decoded || !decoded.id) {
                    throw { message: "Invalid or expired token!" };
                }
                const userId = decoded.id;
                // Cek apakah user sudah diverifikasi
                const existingUser = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                });
                if (!existingUser) {
                    throw { message: "User tidak detemukan!" };
                }
                if (existingUser.isVerify) {
                    throw { message: "User already verified!" };
                }
                // Hash password
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
                // Update user data
                yield prisma_1.default.user.update({
                    where: { id: userId },
                    data: {
                        username,
                        password: hashedPassword,
                        isVerify: true,
                        no_handphone,
                    },
                });
                res.status(200).send({ message: "Akun berhasil diverifikasi!" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({ message: err.message || "Internal server error" });
            }
        });
    }
    socialLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tokenId } = req.body;
                if (!tokenId) {
                    throw { message: "Token ID is required" };
                }
                const googleTicket = yield googleClient.verifyIdToken({
                    idToken: tokenId,
                    audience: process.env.GOOGLE_CLIENT_ID,
                });
                const googlePayload = googleTicket.getPayload();
                if (!googlePayload)
                    throw { message: "Invalid Google token" };
                const email = googlePayload.email;
                const name = googlePayload.name;
                const externalId = googlePayload.sub;
                const avatar = googlePayload.picture;
                if (!email) {
                    throw { message: "Unable to retrieve email from Google token" };
                }
                // Cari user berdasarkan email
                let user = yield prisma_1.default.user.findUnique({ where: { email } });
                let message;
                if (!user) {
                    // Jika user tidak ada, maka buat user baru dengan data dari Google
                    user = yield prisma_1.default.user.create({
                        data: {
                            username: name || "",
                            no_handphone: "",
                            email,
                            googleId: externalId,
                            avatar,
                            isVerify: true,
                        },
                    });
                    message = "User successfully registered and logged in";
                }
                else {
                    if (!user.googleId) {
                        throw { message: "User is already registered" };
                    }
                    message = "User already registered and logged in";
                }
                // Buat token JWT untuk sesi login
                const jwtPayload = { id: user.id, type: "user" };
                const token = (0, jsonwebtoken_1.sign)(jwtPayload, process.env.JWT_KEY, { expiresIn: "1d" });
                res.status(200).send({
                    message,
                    token,
                    user: {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        avatar: user.avatar,
                        no_telp: user.no_handphone,
                    },
                });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({ message: err.message || "Login failed" });
            }
        });
    }
    forgotPasswordUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                // Check if the email exists in the database
                const user = yield prisma_1.default.user.findUnique({
                    where: { email },
                });
                if (!user) {
                    res.status(404).send({ message: "Email not found!" });
                    return;
                }
                // Generate a password reset token
                const payload = { id: user.id, email: user.email };
                const resetToken = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, {
                    expiresIn: "1h", // Token valid for 1 hour
                });
                // Create the password reset link
                const resetLink = `${base_url_fe}/auth/user/login/reset-password/${resetToken}`;
                // Prepare the email template
                const templatePath = path_1.default.join(__dirname, "../../../templates", "forgotPassword.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ username: user.username, resetLink });
                // Send the email
                yield mailer_1.transporter.sendMail({
                    from: "wafifaisal19@gmail.com",
                    to: email,
                    subject: "Password Reset Request",
                    html,
                });
                res
                    .status(200)
                    .send({ message: "Password reset link sent to your email!" });
            }
            catch (err) {
                console.error(err);
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
                console.log("Request body:", req.body);
                if (!token) {
                    res.status(400).send({ message: "Token is required!" });
                    return;
                }
                if (newPassword !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return;
                }
                // Verify the reset token
                let decoded;
                try {
                    decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                }
                catch (err) {
                    console.error("Token verification failed:", err);
                    res.status(400).send({ message: "Invalid or expired token!" });
                    return;
                }
                console.log("Token decoded:", decoded);
                // Check if the user exists
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: decoded.id },
                });
                if (!user) {
                    res.status(404).send({ message: "User not found!" });
                    return;
                }
                // Hash the new password
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashedPassword = yield (0, bcrypt_1.hash)(newPassword, salt);
                // Update the user's password
                yield prisma_1.default.user.update({
                    where: { id: user.id },
                    data: { password: hashedPassword },
                });
                res
                    .status(200)
                    .send({ message: "Password has been reset successfully!" });
            }
            catch (err) {
                console.error("Error resetting password:", err);
                res.status(500).send({ message: "An internal server error occurred!" });
            }
        });
    }
    //SESSION////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader || !authHeader.startsWith("Bearer ")) {
                    res.status(401).send({ message: "Unauthorized: No token provided" });
                    return;
                }
                const token = authHeader.split(" ")[1];
                if (!token) {
                    res.status(401).send({ message: "Unauthorized: Token missing" });
                    return;
                }
                // Verify token
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!decoded || !decoded.type) {
                    res.status(403).send({ message: "Forbidden: Invalid token" });
                    return;
                }
                // Handle different user types
                if (decoded.type === "tenant") {
                    const tenant = yield prisma_1.default.tenant.findUnique({
                        where: { id: decoded.id },
                    });
                    if (!tenant) {
                        res.status(404).send({ message: "Tenant not found" });
                        return;
                    }
                    res.status(200).send({
                        id: tenant.id,
                        type: "tenant",
                        name: tenant.name,
                        email: tenant.email,
                        avatar: tenant.avatar || null,
                    });
                }
                else if (decoded.type === "user") {
                    const user = yield prisma_1.default.user.findUnique({
                        where: { id: decoded.id },
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
                        res.status(404).send({ message: "User not found" });
                        return;
                    }
                    res.status(200).json({
                        id: user.id,
                        type: "user",
                        username: user.username,
                        email: user.email,
                        avatar: user.avatar,
                        isVerify: user.isVerify,
                        googleId: user.googleId,
                    });
                }
                else {
                    res.status(403).json({ message: "Forbidden: Unknown token type" });
                }
            }
            catch (err) {
                console.error("Error fetching session:");
                res
                    .status(401)
                    .send({ message: "Unauthorized: Invalid or expired token" });
            }
        });
    }
    //TENANT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    registerTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                if (!email) {
                    throw new Error("Email is required");
                }
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { email },
                });
                if (tenant) {
                    throw { message: "Email has already been used" };
                }
                const newTenantData = {
                    name: "",
                    no_handphone: "",
                    email,
                };
                const newTenant = yield prisma_1.default.tenant.create({ data: newTenantData });
                const payload = { id: newTenant.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const linkTenant = `${base_url_fe}/auth/tenant/verify-tenant/${token}`;
                const templatePath = path_1.default.join(__dirname, "../../../templates", "verifyTenant.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({
                    linkTenant,
                });
                // Mailer transport
                yield mailer_1.transporter.sendMail({
                    from: "wafifaisal19@gmail.com",
                    to: email,
                    subject: "Selamat Datang di NGINEPIN, Verifikasi Tenant",
                    html,
                });
                res.status(201).json({ message: "Registrasi Berhasil!, Cek Email kamu" });
            }
            catch (err) {
                console.error(err);
                res.status(400).json({ message: "Email sudah terdaftar" });
            }
        });
    }
    loginTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const tenant = yield (0, tenant_service_1.findTenant)(data, data);
                if (!data || !password) {
                    res
                        .status(400)
                        .send({ success: false, message: "Data and password are required!" });
                    return;
                }
                if (!tenant) {
                    res.status(404).send({ success: false, message: "Tenant not found!" });
                    return;
                }
                if (!tenant.isVerify) {
                    res
                        .status(403)
                        .send({ success: false, message: "Tenant is not verified!" });
                    return;
                }
                const isValidPass = yield (0, bcrypt_1.compare)(password, tenant.password);
                if (!isValidPass) {
                    res
                        .status(401)
                        .send({ success: false, message: "Incorrect password!" });
                    return;
                }
                const payload = { id: tenant.id, type: "tenant" }; // ada tipecdcd
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                res.status(200).json({
                    success: true,
                    message: "Login successful!",
                    token,
                });
            }
            catch (err) {
                console.error("Error during tenant login:", {
                    error: err.message,
                    data: req.body.data,
                });
                res.status(500).send({
                    success: false,
                    message: "An unexpected error occurred.",
                });
            }
        });
    }
    verifyTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const { name, password, confirmPassword, no_handphone } = req.body;
                // Validasi password
                if (!password || !confirmPassword || password !== confirmPassword) {
                    throw { message: "Passwords do not match!" };
                }
                const phoneExists = yield prisma_1.default.tenant.findUnique({
                    where: { no_handphone },
                });
                if (phoneExists) {
                    throw { message: "Phone number has already been used!" };
                }
                // Verifikasi token JWT
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!decoded || !decoded.id) {
                    throw { message: "Invalid or expired token!" };
                }
                const tenantId = decoded.id;
                // Cek apakah user sudah diverifikasi
                const existingTenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: tenantId },
                });
                if (!existingTenant) {
                    throw { message: "Tenant not found!" };
                }
                if (existingTenant.isVerify) {
                    throw { message: "Tenant already verified!" };
                }
                // Hash password
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
                // Update user data
                yield prisma_1.default.tenant.update({
                    where: { id: tenantId },
                    data: {
                        name,
                        password: hashedPassword,
                        isVerify: true,
                        no_handphone,
                    },
                });
                res.status(200).send({ message: "Verification successful!" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({ message: err.message || "Internal server error" });
            }
        });
    }
    socialLoginTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tokenId } = req.body;
                if (!tokenId) {
                    throw { message: "Token ID is required" };
                }
                const googleTicket = yield googleClient.verifyIdToken({
                    idToken: tokenId,
                    audience: process.env.GOOGLE_CLIENT_ID,
                });
                const googlePayload = googleTicket.getPayload();
                if (!googlePayload)
                    throw { message: "Invalid Google token" };
                const email = googlePayload.email;
                const name = googlePayload.name;
                const externalId = googlePayload.sub;
                const avatar = googlePayload.picture;
                if (!email) {
                    throw { message: "Unable to retrieve email from Google token" };
                }
                let tenant = yield prisma_1.default.tenant.findUnique({ where: { email } });
                let message;
                if (!tenant) {
                    tenant = yield prisma_1.default.tenant.create({
                        data: {
                            name: name || "",
                            no_handphone: "",
                            email,
                            googleId: externalId,
                            avatar,
                            isVerify: true,
                        },
                    });
                    message = "User successfully registered and logged in";
                }
                else {
                    if (!tenant.googleId) {
                        throw { message: "User is already registered" };
                    }
                    message = "User already registered and logged in";
                }
                const jwtPayload = { id: tenant.id, type: "tenant" };
                const token = (0, jsonwebtoken_1.sign)(jwtPayload, process.env.JWT_KEY, { expiresIn: "1d" });
                res.status(200).send({
                    message,
                    token,
                    user: {
                        id: tenant.id,
                        email: tenant.email,
                        name: tenant.name,
                        avatar: tenant.avatar,
                        no_telp: tenant.no_handphone,
                    },
                });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({ message: err.message || "Login failed" });
            }
        });
    }
    forgotPasswordTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                // Check if the email exists in the database
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { email },
                });
                if (!tenant) {
                    res.status(404).send({ message: "Email not found!" });
                    return;
                }
                // Generate a password reset token
                const payload = { id: tenant.id, email: tenant.email };
                const resetToken = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, {
                    expiresIn: "1h", // Token valid for 1 hour
                });
                // Create the password reset link
                const resetLink = `${base_url_fe}/auth/tenant/login/reset-password/${resetToken}`;
                // Prepare the email template
                const templatePath = path_1.default.join(__dirname, "../../../templates", "forgotPassword.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ name: tenant.name, resetLink });
                // Send the email
                yield mailer_1.transporter.sendMail({
                    from: "wafifaisal19@gmail.com",
                    to: email,
                    subject: "Password Reset Request",
                    html,
                });
                res
                    .status(200)
                    .send({ message: "Password reset link sent to your email!" });
            }
            catch (err) {
                console.error(err);
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
                console.log("Request body:", req.body);
                if (!token) {
                    res.status(400).send({ message: "Token is required!" });
                    return;
                }
                if (newPassword !== confirmPassword) {
                    res.status(400).send({ message: "Passwords do not match!" });
                    return;
                }
                // Verify the reset token
                let decoded;
                try {
                    decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                }
                catch (err) {
                    console.error("Token verification failed:", err);
                    res.status(400).send({ message: "Invalid or expired token!" });
                    return;
                }
                console.log("Token decoded:", decoded);
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: decoded.id },
                });
                if (!tenant) {
                    res.status(404).send({ message: "Tenant not found!" });
                    return;
                }
                // Hash the new password
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashedPassword = yield (0, bcrypt_1.hash)(newPassword, salt);
                yield prisma_1.default.tenant.update({
                    where: { id: tenant.id },
                    data: { password: hashedPassword },
                });
                res
                    .status(200)
                    .send({ message: "Password has been reset successfully!" });
            }
            catch (err) {
                console.error("Error resetting password:", err);
                res.status(500).send({ message: "An internal server error occurred!" });
            }
        });
    }
}
exports.AuthController = AuthController;
