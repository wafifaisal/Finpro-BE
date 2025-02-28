import express, { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./router/userAuth.router";
import { PropertyRouter } from "./router/property.router";
import { UserRouter } from "./router/user.router";
import { CreateRouter } from "./router/create.router";
import { ReviewRouter } from "./router/review.router";
import { ReviewReplyRouter } from "./router/reviewReply.router";
import { UserBookingRouter } from "./router/userBooking.router";
import { TenantRouter } from "./router/tenant.router";
import { TenantBookingRouter } from "./router/tenantBooking.router";

const PORT: number = 8000;
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
export const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `${base_url_fe}`,
    credentials: true,
  })
);

const authRouter = new AuthRouter();
const userRouter = new UserRouter();
const propertyRouter = new PropertyRouter();
const userBookingRouter = new UserBookingRouter();
const reviewRouter = new ReviewRouter();
const reviewReplyRouter = new ReviewReplyRouter();
const createRouter = new CreateRouter();
const tenantRouter = new TenantRouter();
const tenantBookingRouter = new TenantBookingRouter();

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
app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Server is running on -> https://localhost:${PORT}/api`);
});
