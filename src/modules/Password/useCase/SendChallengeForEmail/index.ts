import { PrismaEmailService } from '../../repositories/SendChallengeForEmail/implementation/PrismaSendChallengeForEmail';
import { SendChallengeForUseCase } from './SendChallengeForEmailUseCase';
import { SendChallengeForEmailController } from './SendChallengeForEmailController';
import { resetPasswordEmailController } from '../../../email/useCase/ResetPasswordEmail/index';
const nodemailerEmailService = new PrismaEmailService();

const sendChallengeForEmailUseCase = new SendChallengeForUseCase(nodemailerEmailService, resetPasswordEmailController);
const sendChallengeForEmailController = new SendChallengeForEmailController(sendChallengeForEmailUseCase);

export { sendChallengeForEmailUseCase, sendChallengeForEmailController };
