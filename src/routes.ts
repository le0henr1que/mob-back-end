import { Router } from "express";
//Rating
import { listRatingController } from "./modules/rating/useCase/ListRating/index";
import { createRatingController } from "./modules/rating/useCase/CreateRating/index";
import { deleteRatingController } from "./modules/rating/useCase/DeleteRating/index";
import { listByIdRatingController } from "./modules/rating/useCase/ListByIdRating/index";
import { updateRatingController } from "./modules/rating/useCase/UpdateRating/index";
//local
import { createLocalController } from "./modules/local/useCase/CreateLocal/index";

const router = Router();

router.post("/local", (request, response) => {
  return createLocalController.handle(request, response);
});

router.get("/ratings", (request, response) => {
  return listRatingController.handle(request, response);
});

router.get("/ratings/:id", (request, response) => {
  return listByIdRatingController.handle(request, response);
});

router.post("/ratings", (request, response) => {
  return createRatingController.handle(request, response);
});

router.put("/ratings/:id", (request, response) => {
  return updateRatingController.handle(request, response);
});

router.delete("/ratings/:id", (request, response) => {
  return deleteRatingController.handle(request, response);
});

export { router };
