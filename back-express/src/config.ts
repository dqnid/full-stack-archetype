import { configDotenv } from "dotenv";

configDotenv();

const config = {
  enableCors: false,
  port: process.env.PORT || 3000,
  baseRoute: "/api/v1",
};

export default config;
