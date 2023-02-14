import * as Prisma from "../../repositories/ListByIdRating/implementation/PrismaListByIdRating";
import { ListByIdRatingController } from "./ListByIdRatingController";
import { ListByIdRatingRatingUseCase } from ".//ListByIdRatingUseCase";

const PrismaRatingRepository = new Prisma.PrismaRepositoryListByIdRating();

const listByIdRatingUseCase = new ListByIdRatingRatingUseCase(
  PrismaRatingRepository
);

const listByIdRatingController = new ListByIdRatingController(
  listByIdRatingUseCase
);

export { listByIdRatingUseCase, listByIdRatingController };
