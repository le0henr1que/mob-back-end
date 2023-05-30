import { Response, Request } from 'express';
import { GetCategoryUseCase } from './GetCategoryUseCase';

export class GetCategoryController {
  constructor(private getCategoryUseCase: GetCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const category = await this.getCategoryUseCase.execute();
    return response.status(200).json({ error: false, category });
  }
}
