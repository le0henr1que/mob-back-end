import { PasswordResetRequest, User } from 'types';
import { ConfirmEmailUseCase } from './ConfirmEmailUseCase';

export class ConfirmEmailController {
  constructor(private confirmEmailUseCase: ConfirmEmailUseCase) {}

  async handle(user: User, token: string): Promise<void> {
    console.log('entra no envio do  email');
    this.confirmEmailUseCase.execute(user, token);
  }
}
