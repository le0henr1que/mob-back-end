import { Response, Request } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { Local } from "types";
import { CreateLocalUseCase } from "./CreateLocalUseCase";

export class CreateLocalController {
  constructor(private createLocalUseCase: CreateLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

      const { name } = request.body;

      if(!name){
        throw new HttpError("Propriedade 'name' não encontrada no corpo da requisição", 404);
      }

      const dataLocal:Local ={ 
        name
      }

      const local = await this.createLocalUseCase.execute(dataLocal);
      return response.status(201).json({ error: false, local });

  }
}
