import { Response, Request, NextFunction } from 'express';
import { HttpError } from '../../../../shared/errors/appError';
import { CreateRatingUseCase } from './CreateRatingUseCase';

export class CreateRatingController {
  constructor(private createRatingUseCase: CreateRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { score, localId, userId } = request.body;

    if (!score) {
      throw new HttpError("Propriedade 'socre' não encontrada no corpo da requisição", 404);
    }

    if (!localId) {
      throw new HttpError("Propriedade 'localId' não encontrada no corpo da requisição", 404);
    }

    if (!userId) {
      throw new HttpError("Propriedade 'userId' não encontrada no corpo da requisição", 404);
    }

    const rating = await this.createRatingUseCase.execute(request.body);
    return response.status(201).json({ error: false, rating });
  }
}
