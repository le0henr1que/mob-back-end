import { PasswordResetRequest, User } from 'types';
import { ConfirmEmailUseCase } from './ConfirmEmailUseCase';

export class ConfirmEmailController {
  constructor(private confirmEmailUseCase: ConfirmEmailUseCase) {}

  async handle(user: User, token: string): Promise<void> {
    this.confirmEmailUseCase.execute(user, token);
  }
}
