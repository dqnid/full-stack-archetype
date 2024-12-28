import { Router } from "express";

export const defaultRoute = Router();

defaultRoute.get("/", (_, res) => {
  res.send("Nothing to see here");
  res.status(200);
});
