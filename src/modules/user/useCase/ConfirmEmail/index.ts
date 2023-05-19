import { PrismaCreateSolicitationConfirmEmail } from '../../repositories/ConfirmEmail/implementation/PrismaConfirmEmail';
import { CreateSolicitationConfirmEmailUseCase } from './CreateSolicitationConfirmEmailUseCase';
import { CreateSolicitationConfirmEmailController } from './CreateSolicitationConfirmEmailController';
import { confirmEmailController } from '../../../email/useCase/ConfirmEmail/index';

const prismaCreateSolicitationConfirmEmail = new PrismaCreateSolicitationConfirmEmail();

const createSolicitationConfirmEmailUseCase = new CreateSolicitationConfirmEmailUseCase(
  prismaCreateSolicitationConfirmEmail,
  confirmEmailController,
);
const createSolicitationConfirmEmailController = new CreateSolicitationConfirmEmailController(
  createSolicitationConfirmEmailUseCase,
);

export { createSolicitationConfirmEmailUseCase, createSolicitationConfirmEmailController };
