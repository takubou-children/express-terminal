import { UserService } from "../service/user";
import express from "express";
const router = express.Router();
export const healthCheck = router;

router.get("/", async (req, res) => {
  try {
    await UserService.getAllUsers(); // This will attempt to fetch all users, effectively checking the DB connection
    res.status(200).send("Database connection is healthy");
  } catch (error) {
    res.status(500).send("Database connection failed");
  }
});
