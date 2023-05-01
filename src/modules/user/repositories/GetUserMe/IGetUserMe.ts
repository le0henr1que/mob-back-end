import { User } from 'types';

export interface IGetUserMe {
  executeGetUserMe(userId: string): Promise<User>;
}
