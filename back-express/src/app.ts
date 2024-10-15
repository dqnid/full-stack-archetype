import express from "express";
import config from "./config";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = config.port;

if (config.enableCors) {
  app.use(cors());
}

// Global middleware
app.use((req, _res, next) => {
  console.log(`LOG: new ${req.method} request for ${req.url}`);
  next();
});

// Route specific middleware
app.use("/example", (req, _res, next) => {
  console.log(`LOG: new ${req.method} request for ${req.url}`);
  next();
});

app.use("/api/v1", routes); // / serves as the base for the imported routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
