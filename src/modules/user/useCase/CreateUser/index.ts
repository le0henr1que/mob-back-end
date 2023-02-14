import * as Prisma from "../../repositories/CreateUser/implementation/PrismaCreateUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const PrismaUserRepository = new Prisma.PrismaCreateUser()

const createUserUseCase = new CreateUserUseCase(PrismaUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
