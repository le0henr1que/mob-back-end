import { NodemailerEmailService } from '../../repositories/ConfirmEmail/implementation/NodeMailerConfirmEmail';
import { ConfirmEmailController } from './ConfirmEmailController';
import { ConfirmEmailUseCase } from './ConfirmEmailUseCase';

const nodemailerEmailService = new NodemailerEmailService();

const confirmEmailUseCase = new ConfirmEmailUseCase(nodemailerEmailService);

const confirmEmailController = new ConfirmEmailController(confirmEmailUseCase);

export { confirmEmailController, confirmEmailUseCase };
