import { User } from 'types';

export interface ICreateUser {
  executeCreateUser(dataUser: User): Promise<User>;
}
