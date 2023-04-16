import { User } from 'types';
import { IUpdateUser } from '../../repositories/UpdateUser/IUpdateUser';
import { HttpError } from '../../../../shared/errors/appError';

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUser) {}
  async execute(dataUser: User) {

    const findUserById = await this.updateUserRepository.executeVerifyId(dataUser.id)
    if (findUserById.length == 0) {
      throw new HttpError("Usuário não existente", 400);
    }
    
    return await this.updateUserRepository.executeUpdateUser(dataUser);
  }
}
