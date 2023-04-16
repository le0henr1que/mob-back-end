import { Response, Request } from 'express';
import { GetUniqueUserUseCase } from './GetUniqueUserUseCase';
import { HttpError } from '../../../../shared/errors/appError';

export class GetUniqueUserController {
  constructor(private getUniqueUserUseCase: GetUniqueUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const user = await this.getUniqueUserUseCase.execute(request.params.id);
    if(!user){
      throw new HttpError("Usuário não existente", 404);
    }
    return response.status(200).json({ error: false, user });
  }
}
