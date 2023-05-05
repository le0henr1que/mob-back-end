import { IGoogleLogin } from '../../repositories/Google-Login/IGoogleLogin';

import { HttpError } from '../../../../shared/errors/appError';
import axios from 'axios';
import { AuthenticationCase } from '../Login/AuthenticationUseCase';
import { CreateUserUseCase } from '../../../user/useCase/CreateUser/CreateUserUseCase';
import { User } from 'types';
import crypto from 'crypto';
import { UpdateUserUseCase } from '../../../../modules/user/useCase/UpdateUser/UpdateUserUseCase';

export class GoogleLoginUseCase {
  constructor(
    private googleLoginRepository: IGoogleLogin,
    private authenticationUseCase: AuthenticationCase,
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async execute(access_token: string) {
    const config: any = {
      method: 'get',
      url: 'https://www.googleapis.com/oauth2/v1/userinfo',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    };

    const googleDataUser = await axios.request(config);
    console.log(googleDataUser);

    const findUser = await this.googleLoginRepository.findUser(googleDataUser.data.email);

    if (!findUser.length) {
      const randomPassword = crypto.randomBytes(20).toString('hex');

      const dataUser: User = {
        accepted_terms: false,
        email: googleDataUser.data.email,
        name: googleDataUser.data.name,
        password: randomPassword,
        picture: googleDataUser.data.picture,
      };
      console.log(randomPassword);
      const userCreated = await this.createUserUseCase.execute(dataUser);

      const dataLogin: User = {
        email: userCreated.email,
        password: randomPassword,
      };

      console.log(userCreated);

      const loginUser = await this.authenticationUseCase.execute(dataLogin);

      return loginUser;
    }

    const randomPasswordUpdate = crypto.randomBytes(20).toString('hex');

    const dataUpdate: User = {
      id: findUser[0].id,
      email: findUser[0].email,
      password: randomPasswordUpdate,
    };

    console.log(randomPasswordUpdate);

    const updateUser = await this.updateUserUseCase.execute(dataUpdate);

    const dataLogin: User = {
      email: updateUser.email,
      password: randomPasswordUpdate,
    };

    const loginUser = await this.authenticationUseCase.execute(dataLogin);

    return loginUser;
  }
}
