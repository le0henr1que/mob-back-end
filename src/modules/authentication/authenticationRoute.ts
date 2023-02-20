import { authController } from "./useCae/index";

import { Router } from "express";
import { resolver } from "../../shared/errors/appError";

const authenticationRoute = Router();

authenticationRoute.post(
  "/login",
  resolver((request, response) => {
    return authController.handle(request, response);
  })
);

export { authenticationRoute };
