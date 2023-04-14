import { Response, Request } from 'express';
import { ListByIdRatingRatingUseCase } from './ListByIdRatingUseCase';

export class ListByIdRatingController {
  constructor(private listByIdRatingUseCase: ListByIdRatingRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const rating = await this.listByIdRatingUseCase.execute(request.params.id);
    return response.status(200).json({ error: false, rating });
  }
}
