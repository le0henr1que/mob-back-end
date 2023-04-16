import { Response, Request } from 'express';
import { UpdateRatingUseCase } from './UpdateRatingUseCase';
import { Rating } from 'types';
import { HttpError } from '../../../../shared/errors/appError';

export class UpdateRatingController {
  constructor(private updateRatingUseCase: UpdateRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, localId, rating } = request.body;
    const { id } = request.params;

    if (!userId) {
      throw new HttpError("Propriedade 'userId' não encontrada no corpo da requisição", 404);
    }
    if (!localId) {
      throw new HttpError("Propriedade 'localId' não encontrada no corpo da requisição", 404);
    }
    if (!rating) {
      throw new HttpError("Propriedade 'score' não encontrada no corpo da requisição", 404);
    }

    const dataRating: Rating = {
      id,
      userId,
      localId,
      rating,
    };

    const ratingContent = await this.updateRatingUseCase.execute(dataRating);
    return response.status(200).json({ error: false, ratingContent });
  }
}
