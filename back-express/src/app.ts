import express, { Request, Response } from "express";
import config from "./config";
import cors from "cors";

const app = express();
const port = config.port;

if (config.enableCors) {
  app.use(cors());
}

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
