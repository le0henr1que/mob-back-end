import * as Prisma from '../../repositories/Login/implementation/PrismaAuthentication';
import { AuthenticationController } from './AuthenticationController';
import { AuthenticationCase } from './AuthenticationUseCase';

const PrismaUserRepositoryAuthentication = new Prisma.PrismaAuthentication();

const authenticationUseCase = new AuthenticationCase(PrismaUserRepositoryAuthentication);

const authController = new AuthenticationController(authenticationUseCase);

export { authenticationUseCase, authController };
