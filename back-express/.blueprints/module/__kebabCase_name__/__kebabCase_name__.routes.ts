import { Router } from "express";
import { ResponseSuccess } from "@/utils/response/response-success.model";

import {{pascalCase name}}Service from "./{{kebabCase name}}.service";

export const {{camelCase name}}Routes = Router();

const {{camelCase name}}Service = new {{pascalCase name}}Service();

{{camelCase name}}Routes.get("/", async (_, res) => {
  try {
    const response = await {{camelCase name}}Service.getAll{{pascalCase name}}();
    res.status(200);
    res.send(new ResponseSuccess(response));
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export { {{camelCase name}}Service };
