import { ResetPasswordEmailService } from '../../repositories/ResetPasswordEmail/IResetPasswordImplementation';
import { User, PasswordResetRequest } from 'types';
export class ResetPasswordEmailUseCase {
  constructor(private resetPasswordEmailService: ResetPasswordEmailService) {}

  async execute(user: User, codeChallenge: string) {
    this.resetPasswordEmailService.sendEmail(user, codeChallenge);
  }
}
