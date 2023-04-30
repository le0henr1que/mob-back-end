import { User } from 'types';

export interface IGoogleLogin {
  findUser(email: string): Promise<User[]>;
}
