import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { IVerifyChallenge } from '../../repositories/VerifyChallenge/IVerifyChallenge';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { compare, hash } from 'bcryptjs';

export class VerifyChallengeUseCase {
  constructor(private verifyChallange: IVerifyChallenge) {}

  async execute(token: string, codeChallenge: string) {
    const { secret, expireIn } = jwtModule;
    const [, onlyToken] = token.split(' ');
    const decoded = verify(onlyToken, secret);
    const { id }: any = decoded;

    const userCodeChellange = await this.verifyChallange.findCodeChallenge(id);

    if (!(await compare(codeChallenge, userCodeChellange))) {
      throw new HttpError('Código inválido, reenvie o código e tente novamente', 401);
    }
  }
}
