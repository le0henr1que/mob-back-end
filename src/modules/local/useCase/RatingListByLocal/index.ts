import * as Prisma from "../../repositories/RatingListByLocal/implementation/PrismaRatingListByLocal";
import { RatingListByLocalController } from "./RatingListByLocalController";
import { RatingListByLocalUseCase } from "./RatingListByLocalUseCase";

const PrismaRatingListRepository =
  new Prisma.PrismaRepositoryRatingListByLocal();

const ratingListByLocalUseCase = new RatingListByLocalUseCase(
  PrismaRatingListRepository
);

const ratingListByLocalController = new RatingListByLocalController(
  ratingListByLocalUseCase
);

export { ratingListByLocalUseCase, ratingListByLocalController };
