import * as Prisma from "../../repositories/ListRating/Implementation/PrismaListRating";
import { ListRatingController } from "./ListRatingController";
import { ListRatingUseCase } from "./ListRatingUseCase";

const PrismaRatingRepository = new Prisma.PrismaRepositoryListRating()

const listRatingUseCase = new ListRatingUseCase(PrismaRatingRepository);

const listRatingController = new ListRatingController(listRatingUseCase);

export { listRatingUseCase, listRatingController };