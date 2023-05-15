import { PrismaUpdatePassword } from '../../repositories/UpdatePassword/implementation/PrismaUpdatePassword';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';
import { UpdatePasswordController } from './UpdatePasswordController';
import { verifyCodeChallengeUseCase } from '../VerifyChallenge/index';

const prismaUpdatePassword = new PrismaUpdatePassword();

const updatePasswordUseCase = new UpdatePasswordUseCase(prismaUpdatePassword);
const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);

export { updatePasswordUseCase, updatePasswordController };
