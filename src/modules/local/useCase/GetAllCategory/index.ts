import * as Prisma from '../../repositories/GetAllCategory/implementation/PrismaGetCategory';
import { GetCategoryController } from './GetCategoryController';
import { GetCategoryUseCase } from './GetCategoryUseCase';

const PrismaLCategoryRepository = new Prisma.PrismaRepositoryGetCategory();

const getLCategoryUseCase = new GetCategoryUseCase(PrismaLCategoryRepository);

const getLCategoryController = new GetCategoryController(getLCategoryUseCase);

export { getLCategoryUseCase, getLCategoryController };
