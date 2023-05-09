import { NodemailerEmailService } from '../../repositories/SendChallengeForEmail/implementation/NodeMaillerSendChallenge';
import { SendChallengeForUseCase } from './SendChallengeForEmailUseCase';
import { SendChallengeForEmailController } from './SendChallengeForEmailController';

const nodemailerEmailService = new NodemailerEmailService();

const sendChallengeForEmailUseCase = new SendChallengeForUseCase(nodemailerEmailService);
const sendChallengeForEmailController = new SendChallengeForEmailController(sendChallengeForEmailUseCase);

export { sendChallengeForEmailUseCase, sendChallengeForEmailController };
