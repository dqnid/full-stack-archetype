import { Router } from "express";

export const defaultRoute = Router();

defaultRoute.get("/", (req, res) => {
  res.status(400);
  res.send("Something");
});

defaultRoute.post("/test", (req, res) => {
  res.send("Something with " + JSON.stringify(req.body));
});
