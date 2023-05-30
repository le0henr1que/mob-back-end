import { Response, Request } from 'express';
import { HttpError } from '../../../../shared/errors/appError';
import { Category } from 'types';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    await this.createCategoryUseCase.execute(request.body.category);

    return response.status(201).json({ error: false, message: 'Categoria Adicionada com sucesso!' });
  }
}
