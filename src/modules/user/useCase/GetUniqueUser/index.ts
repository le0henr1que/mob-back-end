import * as Prisma from "../../repositories/GetUniqueUser/implementation/PrismaGetUniqueUser";
import { GetUniqueUserController } from "./GetUniqueUserController";
import { GetUniqueUserUseCase } from "./GetUniqueUserUseCase";

const PrismaUserRepository = new Prisma.PrismaGetUniqueUser();

const getUniqueUserUseCase = new GetUniqueUserUseCase(PrismaUserRepository);

const getUniqueUserController = new GetUniqueUserController(
  getUniqueUserUseCase
);

export { getUniqueUserUseCase, getUniqueUserController };
