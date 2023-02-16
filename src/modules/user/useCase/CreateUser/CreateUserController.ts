import { User } from "types";
import { Response, Request } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

      const { name } = request.body;

      if(!name){
        throw new HttpError("Propriedade 'name' não encontrada no corpo da requisição", 404);
      }

      const userArray:User = {
        name
      }

      const user = await this.createUserUseCase.execute(userArray);
      return response.status(201).json({ error: false, user });
    
  
  }
}
