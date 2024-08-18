import { UserService } from "../service/user";
import express from "express";

const router = express.Router();
export const userRouter = router;
router.get("/users", async (req, res) => {
  const users = await UserService.getAllUsers();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UserService.getUserById(Number(id));
  res.json(user);
});

router.post("/users", async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UserService.updateUser(Number(id), req.body);
  res.json(user);
});
