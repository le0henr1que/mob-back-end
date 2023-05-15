import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { IVerifyChallenge } from '../../repositories/VerifyChallenge/IVerifyChallenge';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { compare, hash } from 'bcryptjs';
import { decodeTokenResetPassword } from '../../../../utils/decodeTokenResetPassword/decodeTokenResetPassword';

export class VerifyChallengeUseCase {
  constructor(private verifyChallange: IVerifyChallenge) {}

  async execute(token: string, codeChallenge: string) {
    const userId = await decodeTokenResetPassword(token);

    const userCodeChellange = await this.verifyChallange.findCodeChallenge(userId);

    if (!userCodeChellange) {
      throw new HttpError('Código inválido, reenvie o código e tente novamente', 401);
    }

    if (!(await compare(codeChallenge, userCodeChellange.codeChallenge))) {
      throw new HttpError('Código inválido, reenvie o código e tente novamente', 401);
    }
  }
}
