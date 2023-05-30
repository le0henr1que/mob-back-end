import { Response, Request } from 'express';
import { HttpError } from '../../../../shared/errors/appError';
import { Subcategory } from 'types';
import { CreateSubcategoryUseCase } from './CreateSubcategoryUseCase';

export class CreateSubcategoryController {
  constructor(private createSubcategoryUseCase: CreateSubcategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    await this.createSubcategoryUseCase.execute(request.body.subcategory, request.body.categoryId);

    return response.status(201).json({ error: false, message: 'Subcategorias Adicionadas com sucesso!' });
  }
}
