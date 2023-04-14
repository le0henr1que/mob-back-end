import * as Prisma from '../../repositories/UpdateLocal/implementation/PrismaUpdateLocal';
import { UpdateLocalController } from './UpdateLocalController';
import { UpdateLocalUseCase } from './UpdateLocalUseCase';

const PrismaLocalRepository = new Prisma.PrismaRepositoryUpdateLocal();

const updateLocalUseCase = new UpdateLocalUseCase(PrismaLocalRepository);

const updateLocalController = new UpdateLocalController(updateLocalUseCase);

export { updateLocalUseCase, updateLocalController };
