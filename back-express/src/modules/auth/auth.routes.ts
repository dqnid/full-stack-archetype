import { Router } from "express";
import { userService } from "../users/users.routes";
import { AuthService } from "./auth.service";
import { ResponseError } from "../../utils/response/response-error.model";

export const authRoutes = Router();

const authService = new AuthService(userService);

authRoutes.post("/login", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400);
      res.send(new ResponseError(400));
    }
    const token = await authService.signIn(
      req.body.username,
      req.body.password,
    );
    if (token) {
      res.status(200);
      res.send({ access_token: token });
    } else {
      res.status(401);
      res.send(new ResponseError(401));
    }
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export { authService };
