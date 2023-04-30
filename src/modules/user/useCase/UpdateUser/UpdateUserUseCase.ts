import { User } from 'types';
import { IUpdateUser } from '../../repositories/UpdateUser/IUpdateUser';
import { HttpError } from '../../../../shared/errors/appError';
import { hash } from 'bcryptjs';

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUser) {}
  async execute(dataUser: User) {
    const { password } = dataUser;
    const findUserById = await this.updateUserRepository.executeVerifyId(dataUser.id);

    if (findUserById.length == 0) {
      throw new HttpError('Usuário não existente', 400);
    }

    dataUser.password = await hash(password, 8);

    return await this.updateUserRepository.executeUpdateUser(dataUser);
  }
}
