import * as Prisma from '../../repositories/SearchLocal/implementation/PrismaSearchLocal';
import { SearchLocalController } from './SearchLocalController';
import { SearchLocalUseCase } from './SearchLocalUseCase';

const PrismaLocalRepository = new Prisma.PrismaRepositorySearchLocal();

const searchLocalUseCase = new SearchLocalUseCase(PrismaLocalRepository);

const searchLocalController = new SearchLocalController(searchLocalUseCase);

export { searchLocalUseCase, searchLocalController };
