import { User } from 'types';

export interface ILogout {
  executeLogout(token: string, exp: Date): Promise<void>;
}
