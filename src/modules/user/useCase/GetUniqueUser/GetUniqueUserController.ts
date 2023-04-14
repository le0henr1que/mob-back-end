import { Response, Request } from 'express';
import { GetUniqueUserUseCase } from './GetUniqueUserUseCase';

export class GetUniqueUserController {
  constructor(private getUniqueUserUseCase: GetUniqueUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const user = await this.getUniqueUserUseCase.execute(request.params.id);
    return response.status(200).json({ error: false, user });
  }
}
