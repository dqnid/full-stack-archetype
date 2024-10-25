import { Router } from "express";
import UserService from "./users.service";
import { ResponseError } from "../../utils/error/response-error.model";

export const userRoutes = Router();

const userService = new UserService();

userRoutes.get("/", async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    // console.log("__DB_DATA", data);
    res.status(200);
    res.send(response);
  } catch (e) {
    // const response_error = new ResponseError(e);
    res.status(400);
    res.send(e);
  }
});
