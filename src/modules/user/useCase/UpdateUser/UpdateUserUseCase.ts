import { User } from 'types';
import { IUpdateUser } from '../../repositories/UpdateUser/IUpdateUser';

export class UpdateUserUseCase {
  constructor(private updateUserRepository: IUpdateUser) {}
  async execute(dataUser: User) {
    return await this.updateUserRepository.executeUpdateUser(dataUser);
  }
}
