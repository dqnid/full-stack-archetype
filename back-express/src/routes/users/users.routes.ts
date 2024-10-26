import { Router } from "express";
import UsersService from "./users.service";
import { sanitize_user } from "./users.utils";
import { ResponseSuccess } from "../../utils/response/response-success.model";
import { ResponseError } from "../../utils/response/response-error.model";

export const userRoutes = Router();

const userService = new UsersService();

//TODO: block access to NON-admins or simply comment
userRoutes.get("/", async (_, res) => {
  try {
    const response = await userService.getAllUsers();
    res.status(200);
    res.send(new ResponseSuccess(response.map((user) => sanitize_user(user))));
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
      res.send(new ResponseSuccess(sanitize_user(response)));
    } else {
      res.status(404);
      res.send(new ResponseError({ code: "NOT_FOUND", number: 404 }));
    }
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export { userService };
