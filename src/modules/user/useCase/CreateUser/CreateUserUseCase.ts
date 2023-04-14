import { User } from 'types';
import { ICreateUser } from '../../repositories/CreateUser/ICreateUser';
import { hash } from 'bcryptjs';

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUser) {}

  async execute(dataUser: User) {
    const { email, password, name } = dataUser;

    dataUser.password = await hash(password, 8);

    return await this.createUserRepository.executeCreateUser(dataUser);
  }
}
