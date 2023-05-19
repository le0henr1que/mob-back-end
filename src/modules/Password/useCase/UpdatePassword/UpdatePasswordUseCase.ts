import { sign, verify } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { IUpdatePassword } from '../../repositories/UpdatePassword/IUpdatePassword';
import { jwtModule } from '../../../../config/TicketTokenResetPassword/ticketToken';
import { compare, hash } from 'bcryptjs';
import { VerifyChallengeUseCase } from '../VerifyChallenge/VerifyCodeChallengeUseCase';
import { decodeToken } from '../../../../utils/decodeToken/decodeToken';

export class UpdatePasswordUseCase {
  constructor(private updatePassword: IUpdatePassword) {}

  async execute(token: string, newPassword: string, codeChallenge: string) {
    console.log('teste');

    const userId = await decodeToken(token, jwtModule.secret);

    const solicitationStatus = await this.updatePassword.getStatusSolicitation(userId);

    console.log(solicitationStatus.status);
    if (solicitationStatus.status !== 'used') {
      throw new HttpError('Erro ao alterar a senha. Aguarde um momento e tente novamente.', 401);
    }

    if (!newPassword) {
      throw new HttpError('Digite sua nova senha para prosseguir', 404);
    }

    newPassword = await hash(newPassword, 8);

    await this.updatePassword.updatePassword(userId, newPassword);

    await this.updatePassword.removeSolicitation(userId);
  }
}
