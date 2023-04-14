import * as Prisma from '../../repositories/DeleteRating/implementation/PrismaDeleteRating';
import { DeleteRatingController } from './DeleteRatingController';
import { DeleteRatingUseCase } from './DeleteRatingUseCase';

const PrismaRatingRepository = new Prisma.PrismaRepositoryDeleteRating();

const deleteRatingUseCase = new DeleteRatingUseCase(PrismaRatingRepository);

const deleteRatingController = new DeleteRatingController(deleteRatingUseCase);

export { deleteRatingUseCase, deleteRatingController };
