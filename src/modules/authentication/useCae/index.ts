import * as Prisma from "../repositories/implementation/PrismaAuthentication";
import { authenticationController } from "./AuthenticationController";
import { AuthenticationCase } from "./AuthenticationUseCase";

const PrismaUserRepositoryAuthentication = new Prisma.PrismaAuthentication();

const authenticationUseCase = new AuthenticationCase(PrismaUserRepositoryAuthentication);

const authController = new authenticationController(authenticationUseCase);

export { authenticationUseCase, authController };