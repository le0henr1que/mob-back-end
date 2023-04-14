import { Response, Request } from 'express';
import { ListRatingUseCase } from './ListRatingUseCase';

export class ListRatingController {
  constructor(private listRatingUseCase: ListRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const rating = await this.listRatingUseCase.execute();
    return response.status(200).json({ error: false, rating });
  }
}
