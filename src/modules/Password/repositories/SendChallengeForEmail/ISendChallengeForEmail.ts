import { User } from 'types';

export interface EmailService {
  getUser(to: string): Promise<User>;
  createCodeChallenge?(to: string, codeChallenge: string): Promise<void>;
}
