import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { EmailService } from '../../repositories/SendChallengeForEmail/ISendChallengeForEmail';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { hash } from 'bcryptjs';
import { ResetPasswordEmailController } from '../../../email/useCase/ResetPasswordEmail/ResetPasswordEmailController';
import { decodeToken } from '../../../../utils/decodeToken/decodeToken';

export class SendChallengeForUseCase {
  codeChallenge: string;

  constructor(private emailService: EmailService, private sendEmailResetPassword: ResetPasswordEmailController) {}

  async execute(token: string) {
    let codeChallenge = this.codeChallenge;

    const min = 0;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    codeChallenge = randomNumber.toString().padStart(6, '0');

    const userId = await decodeToken(token, jwtModule.secret);

    const user = await this.emailService.getUser(userId);

    await this.sendEmailResetPassword.handle(user, codeChallenge);

    codeChallenge = await hash(codeChallenge, 8);

    await this.emailService.createCodeChallenge(user.email, codeChallenge);
  }
}
