import express, { Request, Response } from "express";
import { userRouter } from "./controller/user";
import { healthCheck } from "./controller/health";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", userRouter);
app.use("/health", healthCheck);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
