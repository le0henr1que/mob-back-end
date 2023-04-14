import { Response, Request } from 'express';
import { UpdateLocalUseCase } from './UpdateLocalUseCase';
import { Local } from 'types';
import { HttpError } from '../../../../shared/errors/appError';

export class UpdateLocalController {
  constructor(private updateLocalUseCase: UpdateLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      throw new HttpError("Propriedade 'name' não encontrada no corpo da requisição", 404);
    }

    const dataLocal: Local = {
      id,
      name,
    };

    const local = await this.updateLocalUseCase.execute(dataLocal);
    return response.status(200).json({ error: false, local });
  }
}
