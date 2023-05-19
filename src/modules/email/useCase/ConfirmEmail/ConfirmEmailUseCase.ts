import { ConfirmEmailService } from '../../repositories/ConfirmEmail/IConfirmEmail';
import { User, PasswordResetRequest } from 'types';
export class ConfirmEmailUseCase {
  constructor(private confirmEmailService: ConfirmEmailService) {}

  async execute(user: User, token: string) {
    this.confirmEmailService.sendEmail(user, token);
  }
}
