import { Request, Response } from 'express';
import { User } from 'types';
import { LogoutUseCase } from './LogoutUseCase';

export class LogoutController {
  constructor(private logoutUseCase: LogoutUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;

    await this.logoutUseCase.execute(authorization);

    return response.status(200).send({ error: false });
  }
}
