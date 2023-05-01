import * as Prisma from '../../repositories/GetUserMe/implementation/PrismaGetUserMe';
import { GetUserMeController } from './GetUserMeController';
import { GetUserMeUseCase } from './GetUserMeUseCase';

const PrismaUserRepository = new Prisma.PrismaGetUserMe();

const getUserMeUseCase = new GetUserMeUseCase(PrismaUserRepository);

const getUserMeController = new GetUserMeController(getUserMeUseCase);

export { getUserMeUseCase, getUserMeController };
