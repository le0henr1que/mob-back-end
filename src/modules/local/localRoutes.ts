import { createLocalController } from "./useCase/CreateLocal/index";
import { getLocalController } from "./useCase/GetLocal/index";
import { listByIdLocalController } from "./useCase/ListByIdLocal/index";
import { updateLocalController } from "./useCase/UpdateLocal/index";
import { ratingListByLocalController } from "./useCase/RatingListByLocal/index";
import { Router } from "express";
import { resolver } from "../../shared/errors/appError";
import authMiddleware from "../../middlewares/authentication/authenticationMiddleware";

const routerLocal = Router();

routerLocal.post(
  "/local",
  authMiddleware,
  resolver((request, response) => {
    return createLocalController.handle(request, response);
  })
);
routerLocal.get(
  "/local",
  resolver((request, response) => {
    return getLocalController.handle(request, response);
  })
);
routerLocal.get(
  "/local/:id",
  resolver((request, response) => {
    return listByIdLocalController.handle(request, response);
  })
);
routerLocal.get(
  "/local/:id/ratings",
  resolver((request, response) => {
    return ratingListByLocalController.handle(request, response);
  })
);
routerLocal.put(
  "/local/:id",
  resolver((request, response) => {
    return updateLocalController.handle(request, response);
  })
);

export { routerLocal };
