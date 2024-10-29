import { Router } from "express";

import ExampleService from "./example.service";
import { ResponseSuccess } from "../../utils/response/response-success.model";
import { ResponseError } from "../../utils/response/response-error.model";

export const exampleRoutes = Router();

const exampleService = new ExampleService();

exampleRoutes.get("/", async (_, res) => {
  try {
    const response = await exampleService.getAllExamples();
    res.status(200);
    res.send(new ResponseSuccess(response));
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

exampleRoutes.get("/:id", async (req, res) => {
  try {
    const response = await exampleService.getExampleById(
      parseInt(req.params.id),
    );
    if (response) {
      res.status(200);
      res.send(new ResponseSuccess(response));
    } else {
      res.status(404);
      res.send(new ResponseError({ code: "NOT_FOUND", number: 404 }));
    }
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export { exampleService };
