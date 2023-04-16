import { User } from 'types';
import { ICreateUser } from '../../repositories/CreateUser/ICreateUser';
import { hash } from 'bcryptjs';
import { HttpError } from '../../../../shared/errors/appError';

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUser) {}

  async execute(dataUser: User) {
    const { email, password, name, accepted_terms } = dataUser;

    dataUser.password = await hash(password, 8);

    const findEmail = await this.createUserRepository.executeVerifyEmail(email)

    if (findEmail.length >= 1) {
      throw new HttpError("Usuário já existente", 400);
    }


    return await this.createUserRepository.executeCreateUser(dataUser);
  }
}
