import express from "express";

import { defaultRoute } from "./defaultRoute";
import { exampleRoutes } from "./example/example.routes";

export const routes = express.Router();

routes.use("/", defaultRoute);
routes.use("/example", exampleRoutes);
