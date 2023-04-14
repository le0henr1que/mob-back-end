import { User } from 'types';

export interface IUpdateUser {
  executeUpdateUser(dataUser: User): Promise<User>;
}
