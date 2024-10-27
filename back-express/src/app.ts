import express from "express";
import config from "./config";
import cors from "cors";
import { routes } from "./modules";
import { authorizationMiddleware } from "./modules/auth/auth.middleware";

const app = express();
const port = config.port;

if (config.enableCors) {
  app.use(cors());
}

app.use(express.json());
// Global middleware
app.use(authorizationMiddleware as any); // TODO: move out of here
app.use((req, _res, next) => {
  console.log(`LOG: new ${req.method} request for ${req.url}`);
  next();
});

// Route specific middleware
app.use("/example", (req, _res, next) => {
  console.log(`LOG: new ${req.method} example request for ${req.url}`);
  next();
});

app.use(config.baseRoute, routes); // / serves as the base for the imported routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
