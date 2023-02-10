import * as Prisma from "../../repositories/CreateRating/implementation/PrismaCreateRating";
import { CreateRatingController } from "./CreateRatingController";
import { CreateRatingUseCase } from "./CreateRatingUseCase";

const PrismaRatingRepository = new Prisma.PrismaRepositoryCreateRating()

const createRatingUseCase = new CreateRatingUseCase(PrismaRatingRepository);

const createRatingController = new CreateRatingController(createRatingUseCase);

export { createRatingUseCase, createRatingController };