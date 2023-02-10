import { Router } from "express";
import { listRatingController } from "./modules/rating/useCase/ListRating/index"
import { createRatingController } from "./modules/rating/useCase/CreateRating/index"
const router = Router();

router.get(
  "/ratings",
  (request, response) => {
    return listRatingController.handle(request, response);
  }
);

router.post(
  "/ratings",
  (request, response) => {
    return createRatingController.handle(request, response);
  }
);


export { router };
