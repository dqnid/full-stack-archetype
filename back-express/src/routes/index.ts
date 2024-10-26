import express from "express";

import { defaultRoute } from "./default.route";
import { exampleRoutes } from "./example/example.routes";
import { userRoutes } from "./users/users.routes";

export const routes = express.Router();

routes.use("/", defaultRoute);
routes.use("/example", exampleRoutes);
routes.use("/users", userRoutes);
