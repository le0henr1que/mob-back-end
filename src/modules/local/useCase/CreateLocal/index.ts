import * as Prisma from '../../repositories/CreateLocal/implementation/PrismaCreatelocal';
import { CreateLocalController } from './CreateLocalController';
import { CreateLocalUseCase } from './CreateLocalUseCase';

const PrismaLocalRepository = new Prisma.PrismaRepositoryCreateLocal();

const createLocalUseCase = new CreateLocalUseCase(PrismaLocalRepository);

const createLocalController = new CreateLocalController(createLocalUseCase);

export { createLocalUseCase, createLocalController };
