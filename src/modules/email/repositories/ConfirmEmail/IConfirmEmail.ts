import { PasswordResetRequest, User } from 'types';

export interface ConfirmEmailService {
  sendEmail(user: User, token: string): Promise<void>;
}
