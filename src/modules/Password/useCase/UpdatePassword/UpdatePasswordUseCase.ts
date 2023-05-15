import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { IUpdatePassword } from '../../repositories/UpdatePassword/IUpdatePassword';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { compare, hash } from 'bcryptjs';
import { VerifyChallengeUseCase } from '../VerifyChallenge/VerifyCodeChallengeUseCase';
import { decodeTokenResetPassword } from '../../../../utils/decodeTokenResetPassword/decodeTokenResetPassword';

export class UpdatePasswordUseCase {
  constructor(private updatePassword: IUpdatePassword, private verifyCodeChallange: VerifyChallengeUseCase) {}

  async execute(token: string, newPassword: string, codeChallenge: string) {
    console.log('teste');

    const userId = await decodeTokenResetPassword(token);

    await this.verifyCodeChallange.execute(token, codeChallenge);

    if (!newPassword) {
      throw new HttpError('Digite sua nova senha para prosseguir', 404);
    }

    newPassword = await hash(newPassword, 8);

    await this.updatePassword.updatePassword(userId, newPassword);

    await this.updatePassword.removeSolicitation(userId);
  }
}
