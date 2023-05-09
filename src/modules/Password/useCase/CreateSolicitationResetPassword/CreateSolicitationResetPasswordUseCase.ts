import { sign } from 'jsonwebtoken';
import { HttpError } from '../../../../../src/shared/errors/appError';
import { ICreateSolicitationResetPassword } from '../../repositories/CreateSolicitationResetPassword/ICreateSolicitationResetPassword';
import { jwtModule } from '../../../../../src/config/TicketTokenResetPassword/ticketToken';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class CreateSolicitationResetPasswordUseCase {
  constructor(private createSolicitationResetPassword: ICreateSolicitationResetPassword) {}

  async execute(email: string) {
    const uuid = uuidv4();
    const userId = await this.createSolicitationResetPassword.getUserForEmail(email);

    if (userId) {
      const token = sign({ id: userId.id }, jwtModule.secret, { expiresIn: jwtModule.expireIn });
      await this.createSolicitationResetPassword.createSolicitation(userId.id, token);
      return token;
    }

    if (!userId) {
      const token = sign({ id: uuid }, jwtModule.secret, { expiresIn: jwtModule.expireIn });
      return token;
    }
  }
}
