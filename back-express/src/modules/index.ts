import express from "express";

import { defaultRoute } from "./default.route";
import { userRoutes } from "./users/users.routes";
import { authRoutes } from "./auth/auth.routes";
import { exampleRoutes } from "./example/example.routes";

export const routes = express.Router();

/*
 * Routes
 * */
routes.use("/", defaultRoute);
routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);
routes.use("/example", exampleRoutes);
