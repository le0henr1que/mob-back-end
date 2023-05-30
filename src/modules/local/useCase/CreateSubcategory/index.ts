import * as Prisma from '../../repositories/CreateSubcategory/implementation/PrismaCreateSubcategory';
import { CreateSubcategoryController } from './CreateSubcategoryController';
import { CreateSubcategoryUseCase } from './CreateSubcategoryUseCase';

const PrismaSubcategoryRepository = new Prisma.PrismaRepositoryCreateSubcategory();

const createSubcategoryUseCase = new CreateSubcategoryUseCase(PrismaSubcategoryRepository);

const createSubcategoryController = new CreateSubcategoryController(createSubcategoryUseCase);

export { createSubcategoryUseCase, createSubcategoryController };
