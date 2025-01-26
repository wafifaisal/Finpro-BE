import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./router/userAuth.router";
import { PropertyRouter } from "./router/property.router";

const PORT: number = 8000;
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `${base_url_fe}`,
    credentials: true,
  })
);
// Initialize routers

const authRouter = new AuthRouter();
const propertyRouter = new PropertyRouter();

//register routers
app.use("/api/auth", authRouter.getRouter());
app.use("/api/property", propertyRouter.getRouter());

//base router
app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Server is running on -> https://localhost:${PORT}/api`);
});
