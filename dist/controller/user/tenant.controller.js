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
exports.TenantController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const cloudinary_1 = require("../../services/cloudinary");
const bcrypt_1 = __importDefault(require("bcrypt"));
const TenantQueryUtils_1 = require("../../utils/TenantQueryUtils");
const tenantDataFetcher_1 = require("../../utils/tenantDataFetcher");
const tenantPropertyUtils_1 = require("../../utils/tenantPropertyUtils");
class TenantController {
    getTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.tenant);
                const filter = (0, TenantQueryUtils_1.buildTenantFilter)(req.query);
                const { page, limit, skip } = (0, TenantQueryUtils_1.getPagination)(req.query);
                const { total_page, tenants } = yield (0, tenantDataFetcher_1.fetchTenants)(filter, limit, skip);
                res.status(200).send({ total_page, page, tenants });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    getTenantCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield prisma_1.default.tenant.count();
                res.status(200).json({ count });
            }
            catch (err) {
                console.error("Error counting tenants:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getTenantProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                if (!tenantId) {
                    res.status(400).json({ message: "Tenant ID is missing" });
                    return;
                }
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: tenantId },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                        createdAt: true,
                        updatedAt: true,
                        isVerify: true,
                        googleId: true,
                    },
                });
                if (!tenant) {
                    res.status(404).json({ message: "Tenant not found" });
                    return;
                }
                res.status(200).json(tenant);
            }
            catch (err) {
                console.error("Error fetching tenant profile:", err);
                res.status(500).json({ message: "Internal server error", error: err });
            }
        });
    }
    deleteTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.tenant.delete({ where: { id } });
                res.status(200).send("Tenant Deleted");
            }
            catch (err) {
                console.error("Error deleting tenant:", err);
                res.status(400).send(err);
            }
        });
    }
    editAvatarTenant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "File is empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "avatar");
                yield prisma_1.default.tenant.update({
                    data: { avatar: secure_url },
                    where: { id: (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ message: "Avatar edited!" });
            }
            catch (err) {
                console.error("Error editing tenant avatar:", err);
                res.status(400).send(err);
            }
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                const { currentPassword, newPassword } = req.body;
                const tenant = yield prisma_1.default.tenant.findUnique({
                    where: { id: tenantId },
                    select: { password: true },
                });
                if (!tenant) {
                    res.status(404).json({ message: "Tenant not found" });
                    return;
                }
                if (!tenant.password) {
                    res.status(400).json({ message: "Tenant password is not available" });
                    return;
                }
                if (!(yield bcrypt_1.default.compare(currentPassword, tenant.password))) {
                    res.status(400).json({ message: "Current password is incorrect" });
                    return;
                }
                if (yield bcrypt_1.default.compare(newPassword, tenant.password)) {
                    res.status(400).json({
                        message: "New password cannot be the same as the current password",
                    });
                    return;
                }
                const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
                yield prisma_1.default.tenant.update({
                    where: { id: tenantId },
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
    getTenantProperties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                if (!tenantId) {
                    res.status(401).json({ message: "Unauthorized" });
                    return;
                }
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 4;
                const skip = (page - 1) * limit;
                const { properties, totalPages, totalProperties } = yield (0, tenantPropertyUtils_1.fetchTenantProperties)(tenantId, skip, limit);
                res.status(200).json({ properties, page, totalPages, totalProperties });
            }
            catch (err) {
                console.error("Error fetching tenant properties:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getTenantPropertyCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
                if (!tenantId) {
                    res.status(400).json({ message: "Tenant ID is required" });
                    return;
                }
                const totalProperties = yield prisma_1.default.property.count({
                    where: { tenantId, isAvailable: true },
                });
                res.status(200).json({ totalProperties });
            }
            catch (err) {
                console.error("Error fetching tenant property count:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    countTenantReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const tenantId = (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const result = yield prisma_1.default.review.aggregate({
                    _avg: { rating: true },
                    _count: { rating: true },
                    where: {
                        room_types: {
                            property: {
                                tenantId: tenantId,
                            },
                        },
                    },
                });
                const totalReviews = result._count.rating;
                const avgRating = result._avg.rating || 0;
                res.status(200).send({ totalReviews, avgRating });
            }
            catch (error) {
                res.status(500).send({ message: error });
            }
        });
    }
}
exports.TenantController = TenantController;
//# sourceMappingURL=tenant.controller.js.map