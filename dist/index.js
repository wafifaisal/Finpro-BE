"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userAuth_router_1 = require("./router/userAuth.router");
const property_router_1 = require("./router/property.router");
const user_router_1 = require("./router/user.router");
const create_router_1 = require("./router/create.router");
const review_router_1 = require("./router/review.router");
const reviewReply_router_1 = require("./router/reviewReply.router");
const userBooking_router_1 = require("./router/userBooking.router");
const tenant_router_1 = require("./router/tenant.router");
const tenantBooking_router_1 = require("./router/tenantBooking.router");
const PORT = 8000;
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
exports.upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: `${base_url_fe}`,
    credentials: true,
}));
const authRouter = new userAuth_router_1.AuthRouter();
const userRouter = new user_router_1.UserRouter();
const propertyRouter = new property_router_1.PropertyRouter();
const userBookingRouter = new userBooking_router_1.UserBookingRouter();
const reviewRouter = new review_router_1.ReviewRouter();
const reviewReplyRouter = new reviewReply_router_1.ReviewReplyRouter();
const createRouter = new create_router_1.CreateRouter();
const tenantRouter = new tenant_router_1.TenantRouter();
const tenantBookingRouter = new tenantBooking_router_1.TenantBookingRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/property", propertyRouter.getRouter());
app.use("/api/user-bookings", userBookingRouter.getRouter());
app.use("/api/reviews", reviewRouter.getRouter());
app.use("/api/review-reply", reviewReplyRouter.getRouter());
app.use("/api/create", createRouter.getRouter());
app.use("/api/tenant", tenantRouter.getRouter());
app.use("/api/tenant-bookings", tenantBookingRouter.getRouter());
//base router
app.get("/api", (req, res) => {
    res.status(200).send("Welcome to my API");
});
app.listen(PORT, () => {
    console.log(`Server is running on -> https://localhost:${PORT}/api`);
});
