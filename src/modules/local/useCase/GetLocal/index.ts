import * as Prisma from "../../repositories/GetLocal/implementation/PrismaGetLocal";
import { GetLocalController } from "./GetLocalController";
import { GetLocalUseCase } from "./GetLocalUseCase";

const PrismaLocalRepository = new Prisma.PrismaRepositoryGetLocal()

const getLocalUseCase = new GetLocalUseCase(PrismaLocalRepository);

const getLocalController = new GetLocalController(getLocalUseCase);

export { getLocalUseCase, getLocalController };
