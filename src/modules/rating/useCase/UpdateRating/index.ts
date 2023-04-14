import * as Prisma from '../../repositories/UpdateRating/implementation/PrismaUpdateRating';
import { UpdateRatingController } from './UpdateRatingController';
import { UpdateRatingUseCase } from './UpdateRatingUseCase';

const PrismaRatingRepository = new Prisma.PrismaRepositoryUpdateRating();

const updateRatingUseCase = new UpdateRatingUseCase(PrismaRatingRepository);

const updateRatingController = new UpdateRatingController(updateRatingUseCase);

export { updateRatingUseCase, updateRatingController };
