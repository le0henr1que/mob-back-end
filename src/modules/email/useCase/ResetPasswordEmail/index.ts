import { NodemailerEmailService } from '../../repositories/ResetPasswordEmail/implementation/NodeMailerResetPasswordImplementation';
import { ResetPasswordEmailController } from './ResetPasswordEmailController';
import { ResetPasswordEmailUseCase } from './ResetPasswordEmailUseCase';

const nodemailerEmailService = new NodemailerEmailService();

const resetPasswordUseCase = new ResetPasswordEmailUseCase(nodemailerEmailService);

const resetPasswordEmailController = new ResetPasswordEmailController(resetPasswordUseCase);

export { resetPasswordEmailController, ResetPasswordEmailUseCase };
