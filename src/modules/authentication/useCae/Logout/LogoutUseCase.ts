import { ILogout } from '../../repositories/Logout/ILogout';
import { User } from 'types';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { jwtModule } from '../../../../config/Auth/auth';
import { HttpError } from '../../../../shared/errors/appError';
import { verify } from 'jsonwebtoken';

export class LogoutUseCase {
  constructor(private logoutRepository: ILogout) {}

  async execute(token: string) {
    const { secret } = jwtModule;

    const [, onlyToken] = token.split(' ');
    const decoded: any = verify(onlyToken, secret);
    const expDate = new Date(decoded.exp * 1000);
    await this.logoutRepository.executeLogout(onlyToken, expDate);
  }
}
