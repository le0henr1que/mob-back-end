import { User } from 'types';
import { IGetUserMe } from '../../repositories/GetUserMe/IGetUserMe';
import { verify } from 'jsonwebtoken';
import { jwtModule } from '../../../../utils/config/Auth/auth';

export class GetUserMeUseCase {
  constructor(private getUserMeRepository: IGetUserMe) {}

  async execute(userId: string) {
    const { secret, expireIn } = jwtModule;

    const decoded: any = verify(userId, secret);

    const { id } = decoded;
    return await this.getUserMeRepository.executeGetUserMe(id);
  }
}
