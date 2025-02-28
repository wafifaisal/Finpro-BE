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
const prisma_1 = __importDefault(require("../../../prisma"));
const cloudinary_1 = require("../../../services/cloudinary");
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const mailer_1 = require("../../../services/mailer");
const bcrypt_1 = __importDefault(require("bcrypt"));
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
class UserController {
    constructor() {
        this.updatePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // ID pengguna dari token autentikasi
                const { currentPassword, newPassword } = req.body;
                // Cek apakah pengguna ada di database
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: { password: true }, // Ambil hash password lama
                });
                if (!user) {
                    throw { message: "User not found" };
                }
                // Pastikan password di database bukan null sebelum dibandingkan
                if (!user.password) {
                    throw { message: "User password is not available" };
                }
                // Bandingkan currentPassword dengan password di database
                const isMatch = yield bcrypt_1.default.compare(currentPassword, user.password);
                if (!isMatch) {
                    throw { message: "Current password is incorrect" };
                }
                // Cegah pengguna menggunakan password yang sama
                const isSamePassword = yield bcrypt_1.default.compare(newPassword, user.password);
                if (isSamePassword) {
                    throw {
                        message: "New password cannot be the same as the current password",
                    };
                }
                // Hash password baru sebelum menyimpannya
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                // Update password di database
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
                console.log(req.user);
                const { search, page = 1 } = req.query;
                const limit = 10;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { username: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countUser = yield prisma_1.default.user.aggregate({
                    _count: { _all: true },
                });
                const total_page = Math.ceil(countUser._count._all / +limit);
                const users = yield prisma_1.default.user.findMany({
                    where: filter,
                    orderBy: { createdAt: "asc" },
                    take: limit,
                    skip: limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, users });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                console.log("User ID from Request:", userId);
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
                // Ambil data pengguna saat ini
                const currentUser = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: { email: true },
                });
                if (!currentUser) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                // Cek apakah email baru sama dengan email saat ini
                if (currentUser.email === email) {
                    res.status(400).json({
                        message: "New email cannot be the same as the current email",
                    });
                    return;
                }
                // Buat token dengan payload yang menyimpan id user dan email baru
                const payload = { id: userId, newEmail: email };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const linkUser = `${base_url_fe}/profile/${token}`;
                // Load dan compile template email menggunakan Handlebars
                const templatePath = path_1.default.join(__dirname, "../../../templates", "verifyEmail.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ linkUser });
                // Kirim email verifikasi ke email baru
                yield mailer_1.transporter.sendMail({
                    from: "wafifaisal19@gmail.com",
                    to: email,
                    subject: "Verify Your New Email - NGINEPIN",
                    html,
                });
                res.status(200).json({
                    message: "Verification email sent successfully. Please check your inbox to verify your new email.",
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
                // Verifikasi token dan ekstrak payload
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                // Update data email di database dengan email baru dari token
                yield prisma_1.default.user.update({
                    where: { id: decoded.id },
                    data: { email: decoded.newEmail },
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
