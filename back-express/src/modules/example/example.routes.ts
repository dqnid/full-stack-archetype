import { Router } from "express";

export const exampleRoutes = Router();

exampleRoutes.get("/", (req, res) => {
  res.status(400);
  res.send("Something");
});

exampleRoutes.post("/new", (req, res) => {
  res.send("Something with " + JSON.stringify(req.body));
});
