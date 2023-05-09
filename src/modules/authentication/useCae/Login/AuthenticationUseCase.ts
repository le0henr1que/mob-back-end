import { IAuthentication } from '../../repositories/Login/IAuthentication';
import { User } from 'types';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { jwtModule } from '../../../../config/Auth/auth';
import { HttpError } from '../../../../shared/errors/appError';

export class AuthenticationCase {
  constructor(private authenticationRepository: IAuthentication) {}

  async execute(dataUser: User) {
    const { password, email, name } = dataUser;

    const searchUser = await this.authenticationRepository.findEmail(email);

    if (!searchUser) {
      throw new HttpError(
        'Ooops! Parece que suas credenciais de login estão incorretas. Por favor, verifique se digitou corretamente ou redefina sua senha se tiver esquecido.',
        404,
      );
    }

    if (!(await compare(password, searchUser.password))) {
      throw new HttpError(
        'Ooops! Parece que suas credenciais de login estão incorretas. Por favor, verifique se digitou corretamente ou redefina sua senha se tiver esquecido.',
        401,
      );
    }

    const user: User = {
      name: searchUser.name,
      email: searchUser.email,
      token: sign({ id: searchUser.id }, jwtModule.secret, {
        expiresIn: jwtModule.expireIn,
      }),
    };

    return user;
  }
}
