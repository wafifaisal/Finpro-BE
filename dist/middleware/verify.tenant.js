"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenTenant = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyTokenTenant = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401).json({ message: "No authorization header found" });
            return;
        }
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : null;
        if (!token) {
            res.status(401).json({ message: "Invalid token format" });
            return;
        }
        try {
            const verifiedTenant = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
            req.tenant = verifiedTenant;
            next();
        }
        catch (verifyError) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }
    }
    catch (err) {
        console.error("Token verification error:", err);
        res
            .status(500)
            .json({ message: "Internal server error during authentication" });
    }
};
exports.verifyTokenTenant = verifyTokenTenant;
//# sourceMappingURL=verify.tenant.js.map