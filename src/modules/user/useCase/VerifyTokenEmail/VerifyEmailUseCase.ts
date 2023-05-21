import { User } from 'types';
import { IVerifyTokenEmail } from '../../repositories/VerifyTokenEmail/IVerifyTokenEmail';
import { decodeToken } from '../../../../utils/decodeToken/decodeToken';
import { jwtModuleConfirmEmail } from '../../../../config/TicketTokenConfirmEmail/ticketToken';
import { HttpError } from '../../../../shared/errors/appError';

export class VerifyTokenEmailUseCase {
  constructor(private verifyTokenEmail: IVerifyTokenEmail) {}

  async execute(token: string) {
    const userId = await decodeToken(token, jwtModuleConfirmEmail.secret);
    const solicitation = await this.verifyTokenEmail.verifySolicitation(token);
    if (!solicitation) {
      throw new HttpError(
        'Desculpe-nos, socorreu um erro ao confirmar seu e-mail. Por favor, tente novamente mais tarde. Se a solicitação expirou, por favor, solicite um novo e-mail de confirmação. Entre em contato com nosso suporte caso precise de mais assistência. Pedimos desculpas pelo inconveniente causado.',
        400,
      );
    }
    const [, onlyToken] = token.split(' ');
    await this.verifyTokenEmail.deleteSolicitation(onlyToken);
    await this.verifyTokenEmail.updateSolicitation(userId);
  }
}
