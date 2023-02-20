import { listRatingController } from "./useCase/ListRating/index";
import { createRatingController } from "./useCase/CreateRating/index";
import { deleteRatingController } from "./useCase/DeleteRating/index";
import { listByIdRatingController } from "./useCase/ListByIdRating/index";
import { updateRatingController } from "./useCase/UpdateRating/index";
import { Router } from "express";
import { resolver } from "../../shared/errors/appError";
import authMiddleware from "../../middlewares/authentication/authenticationMiddleware";

const routerRating = Router();

routerRating.get(
  "/ratings",
  resolver((request, response) => {
    return listRatingController.handle(request, response);
  })
);
routerRating.get(
  "/rating/:id",
  resolver((request, response) => {
    return listByIdRatingController.handle(request, response);
  })
);
routerRating.post(
  "/rating",
  authMiddleware,
  resolver((request, response) => {
    return createRatingController.handle(request, response);
  })
);
routerRating.put(
  "/ratings/:id",
  authMiddleware,
  resolver((request, response) => {
    return updateRatingController.handle(request, response);
  })
);
routerRating.delete(
  "/ratings/:id",
  authMiddleware,
  resolver((request, response) => {
    return deleteRatingController.handle(request, response);
  })
);

export { routerRating };
