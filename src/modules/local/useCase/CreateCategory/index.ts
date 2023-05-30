import * as Prisma from '../../repositories/CreateCategory/implementation/PrismaCreateCategory';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const PrismaCategoryRepository = new Prisma.PrismaRepositoryCreateCategory();

const createCategoryUseCase = new CreateCategoryUseCase(PrismaCategoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryUseCase, createCategoryController };
