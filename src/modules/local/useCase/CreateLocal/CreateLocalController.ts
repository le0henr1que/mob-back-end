import { Response, Request } from 'express';
import { HttpError } from '../../../../shared/errors/appError';
import { Local } from 'types';
import { CreateLocalUseCase } from './CreateLocalUseCase';

export class CreateLocalController {
  constructor(private createLocalUseCase: CreateLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, category, address } = request.body;
    const { cep, complement, number, logradouro, bairro, city, state } = address
    if (!cep) {
      throw new HttpError("Propriedade 'cep' não encontrada no corpo da requisição", 404);
    }
    if (!bairro) {
      throw new HttpError("Propriedade 'bairro' não encontrada no corpo da requisição", 404);
    }
    if (!city) {
      throw new HttpError("Propriedade 'city' não encontrada no corpo da requisição", 404);
    }
    if (!state) {
      throw new HttpError("Propriedade 'state' não encontrada no corpo da requisição", 404);
    }
    if (!logradouro) {
      throw new HttpError("Propriedade 'logradouro' não encontrada no corpo da requisição", 404);
    }
    if (!name) {
      throw new HttpError("Propriedade 'name' não encontrada no corpo da requisição", 404);
    }

    const dataLocal: Local = {
      name,
      category,
      address
    };

    const local = await this.createLocalUseCase.execute(dataLocal);
    
    return response.status(201).json({ error: false, local });
  }
}
