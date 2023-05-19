import { User } from 'types';
import { IUpdateUser } from '../../repositories/UpdateUser/IUpdateUser';
import { HttpError } from '../../../../shared/errors/appError';
import { hash } from 'bcryptjs';
import { decodeToken } from '../../../../utils/decodeToken/decodeToken';
import { jwtModule } from '../../../../config/Auth/auth';
export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUser) {}
  async execute(dataUser: User) {
    const { password, authorization } = dataUser;

    if (authorization && !dataUser.id) {
      dataUser.id = await decodeToken(authorization, jwtModule.secret);
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
