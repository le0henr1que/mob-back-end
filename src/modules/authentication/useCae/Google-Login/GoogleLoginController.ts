import { Request, Response } from 'express';
import { User } from 'types';
import { GoogleLoginUseCase } from './GoogleLoginUseCase';
import { authController } from '../Login/index';

export class GoogleLoginController {
  constructor(private googleLoginUseCase: GoogleLoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { access_token } = request.body;

    const returnGoogleLogin = await this.googleLoginUseCase.execute(access_token);

    return response.status(200).send({ error: false, ...returnGoogleLogin });
  }
}
