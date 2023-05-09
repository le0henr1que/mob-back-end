import { PrismaCreateSolicitationPassword } from '../../repositories/CreateSolicitationResetPassword/implementation/PrismaCreateSolicitationPassword';
import { CreateSolicitationResetPasswordUseCase } from './CreateSolicitationResetPasswordUseCase';
import { CreateSolicitationResetPasswordController } from './CreateSolicitationResetPasswordController';

const prismaCreateSolicitationPassword = new PrismaCreateSolicitationPassword();

const createSolicitationResetPasswordUseCase = new CreateSolicitationResetPasswordUseCase(
  prismaCreateSolicitationPassword,
);
const createSolicitationResetPasswordController = new CreateSolicitationResetPasswordController(
  createSolicitationResetPasswordUseCase,
);

export { createSolicitationResetPasswordUseCase, createSolicitationResetPasswordController };
