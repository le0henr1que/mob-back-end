import { User } from 'types';
import { IUpdateUser } from '../../repositories/UpdateUser/IUpdateUser';
import { HttpError } from '../../../../shared/errors/appError';
import { hash } from 'bcryptjs';
import { decodeTokenUser } from '../../../../utils/decodeTokenUser/decodeTokenUser';

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUser) {}
  async execute(dataUser: User) {
    const { password, authorization } = dataUser;

    if (authorization && !dataUser.id) {
      dataUser.id = await decodeTokenUser(authorization);
    }

    const findUserById = await this.updateUserRepository.executeVerifyId(dataUser.id);

    if (findUserById.length == 0) {
      throw new HttpError('Usuário não existente', 400);
    }
    if (password) {
      dataUser.password = await hash(password, 8);
    }

    return await this.updateUserRepository.executeUpdateUser(dataUser);
  }
}
