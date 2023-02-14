import * as Prisma from "../../repositories/UpdateUser/implementation/PrismaUpdateUser";
import { UpdateUserController } from "./UpdataUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const PrismaUserRepository = new Prisma.PrismaUpdateUser()

const updateUserUseCase = new UpdateUserUseCase(PrismaUserRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
