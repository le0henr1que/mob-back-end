import { Router } from "express";
import { listRatingController } from "./modules/rating/useCase/ListRating/index"
const router = Router();

router.get(
  "/ratings",
  (request, response) => {
    return listRatingController.handle(request, response);
  }
);

export { router };
