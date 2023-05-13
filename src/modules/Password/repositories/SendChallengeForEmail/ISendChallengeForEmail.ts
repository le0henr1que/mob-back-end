import { User } from 'types';

export interface EmailService {
  getUser(id: string): Promise<User>;
  createCodeChallenge?(to: string, codeChallenge: string): Promise<void>;
}
