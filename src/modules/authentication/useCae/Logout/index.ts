import * as Prisma from '../../repositories/Logout/implementation/PrismaLogout';
import { LogoutController } from './LogoutController';
import { LogoutUseCase } from './LogoutUseCase';

const PrismaUserRepositoryLogout = new Prisma.PrismaLogout();

const logoutUseCase = new LogoutUseCase(PrismaUserRepositoryLogout);

const logoutController = new LogoutController(logoutUseCase);

export { logoutUseCase, logoutController };
