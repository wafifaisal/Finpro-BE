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
exports.SessionController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
class SessionController {
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
                const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (!decoded || !decoded.type) {
                    res.status(403).send({ message: "Forbidden: Invalid token" });
                    return;
                }
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
                        isVerify: tenant.isVerify,
                        googleId: tenant.googleId,
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
                res
                    .status(401)
                    .send({ message: "Unauthorized: Invalid or expired token" });
            }
        });
    }
}
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map