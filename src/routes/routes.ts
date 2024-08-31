import { Router } from "express";
import { Controller } from "../controller/Controller";

export const router = Router();

const controller = new Controller();

router.post("/registries", (request, response) =>
  controller.upload(request, response)
);

router.patch("/registries", (request, response) =>
  controller.confirm(request, response)
);
