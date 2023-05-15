import { Response, Request } from 'express';
import { GetUserMeUseCase } from './GetUserMeUseCase';
import { HttpError } from '../../../../shared/errors/appError';

export class GetUserMeController {
  constructor(private getUserMeUseCase: GetUserMeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const [, onlyToken] = request.headers.authorization.split(' ');

    const userMe = await this.getUserMeUseCase.execute(onlyToken);

    return response.status(200).json({ error: false, userMe });
  }
}
