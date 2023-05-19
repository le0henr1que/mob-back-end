import { sign } from 'jsonwebtoken';
import { HttpError } from '../../../../shared/errors/appError';
import { ICreateSolicitationConfirmEmail } from '../../repositories/ConfirmEmail/IConfirmEmail';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { jwtModule } from '../../../../config/TicketTokenConfirmEmail/ticketToken';
import { decodeToken } from '../../../../utils/decodeToken/decodeToken';
import { ConfirmEmailController } from '../../../email/useCase/ConfirmEmail/ConfirmEmailController';

export class CreateSolicitationConfirmEmailUseCase {
  constructor(
    private createSolicitationConfirmEmail: ICreateSolicitationConfirmEmail,
    private sendEmail: ConfirmEmailController,
  ) {}

  async execute(token: string) {
    const userId = await decodeToken(token, jwtModule.secret);

    const user = await this.createSolicitationConfirmEmail.getUser(userId);

    const solicitationToken = sign({ id: userId }, jwtModule.secret, { expiresIn: jwtModule.expireIn });
    await this.createSolicitationConfirmEmail.createSolicitation(userId, solicitationToken);

    await this.sendEmail.handle(user, solicitationToken);
  }
}
