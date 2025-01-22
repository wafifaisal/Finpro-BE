import express, { Application, Request, Response } from "express";
import cors from "cors";

const PORT: number = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Server is running on -> https://localhost:${PORT}/api`);
});
