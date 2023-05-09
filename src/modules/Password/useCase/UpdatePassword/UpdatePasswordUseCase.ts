import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { IUpdatePassword } from '../../repositories/UpdatePassword/IUpdatePassword';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { compare, hash } from 'bcryptjs';
import { VerifyChallengeUseCase } from '../VerifyChallenge/VerifyCodeChallengeUseCase';

export class UpdatePasswordUseCase {
  constructor(private updatePassword: IUpdatePassword, private verifyCodeChallange: VerifyChallengeUseCase) {}

  async execute(token: string, newPassword: string, codeChallenge: string) {
    const { secret, expireIn } = jwtModule;
    const [, onlyToken] = token.split(' ');
    const decoded = verify(onlyToken, secret);
    const { id }: any = decoded;

    await this.verifyCodeChallange.execute(token, codeChallenge);

    if (!newPassword) {
      throw new HttpError('Digite sua nova senha para prosseguir', 404);
    }

    newPassword = await hash(newPassword, 8);

    await this.updatePassword.updatePassword(id, newPassword);

    await this.updatePassword.removeSolicitation(id);
  }
}
