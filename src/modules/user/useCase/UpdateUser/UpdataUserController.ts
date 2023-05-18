import { Response, Request } from 'express';
import { HttpError } from '../../../../shared/errors/appError';
import { User } from 'types';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cookieConsent } = request.body;
    const { id } = request.params;
    const { authorization } = request.headers;

    const dataUser: User = {
      id,
      name,
      email,
      password,
      authorization,
      cookieConsent,
    };

    const user = await this.updateUserUseCase.execute(dataUser);
    return response.status(200).json({ error: false, user });
  }
}
