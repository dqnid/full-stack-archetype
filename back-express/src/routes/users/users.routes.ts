import { Router } from "express";
import UserService from "./users.service";

export const userRoutes = Router();

const userService = new UserService();

//TODO: remove info from these Users and block access to NON-admins
userRoutes.get("/", async (_, res) => {
  try {
    const response = await userService.getAllUsers();
    res.status(200);
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

userRoutes.get("/:username", async (req, res) => {
  try {
    const response = await userService.getUserByUsername(req.params.username);
    if (response) {
      res.status(200);
      res.send(response);
    } else {
      res.status(400);
      res.send("error");
    }
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});
