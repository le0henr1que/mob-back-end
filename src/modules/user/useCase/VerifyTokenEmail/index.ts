import * as Prisma from '../../repositories/VerifyTokenEmail/implementation/PrismaVerifyEmail';
import { VerifyTokenController } from './VerifyEmailController';
import { VerifyTokenEmailUseCase } from './VerifyEmailUseCase';

const PrismaUserRepository = new Prisma.PrismaVerifyTokenConfirmEmail();

const verifyEmailUseCase = new VerifyTokenEmailUseCase(PrismaUserRepository);

const verifyEmailController = new VerifyTokenController(verifyEmailUseCase);

export { verifyEmailUseCase, verifyEmailController };
