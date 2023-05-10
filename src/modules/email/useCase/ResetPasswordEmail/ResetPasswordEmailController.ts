import { PasswordResetRequest, User } from 'types';
import { ResetPasswordEmailUseCase } from './ResetPasswordEmailUseCase';

export class ResetPasswordEmailController {
  constructor(private resetPasswordEmailUseCase: ResetPasswordEmailUseCase) {}

  async handle(user: User, codeChallenge: string): Promise<void> {
    this.resetPasswordEmailUseCase.execute(user, codeChallenge);
  }
}
