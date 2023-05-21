import { ConfirmEmailService } from '../../repositories/ConfirmEmail/IConfirmEmail';
import { User, PasswordResetRequest } from 'types';
export class ConfirmEmailUseCase {
  constructor(private confirmEmailService: ConfirmEmailService) {}

  async execute(user: User, token: string) {
    console.log('Caso de uso para enviar o email');
    this.confirmEmailService.sendEmail(user, token);
  }
}
