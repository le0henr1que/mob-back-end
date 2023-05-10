import { PasswordResetRequest, User } from 'types';

export interface ResetPasswordEmailService {
  sendEmail(user: User, codeChallenge: string): Promise<void>;
}
