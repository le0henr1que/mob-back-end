import * as Prisma from '../../repositories/ListByIdLocal/implementation/PrismaListByIdLocal';
import { ListByIdLocalController } from './ListByIdLocalController';
import { ListByIdLocalUseCase } from './ListByIdLocalUseCase';

const PrismaLocalRepository = new Prisma.PrismaRepositoryListByIdLocal();

const listByIdLocalUseCase = new ListByIdLocalUseCase(PrismaLocalRepository);

const listByIdLocalController = new ListByIdLocalController(listByIdLocalUseCase);

export { listByIdLocalUseCase, listByIdLocalController };
