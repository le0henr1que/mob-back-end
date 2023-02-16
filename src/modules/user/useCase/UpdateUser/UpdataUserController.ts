import { Response, Request } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { User } from "types";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

       const { name } = request.body;
       const { id } = request.params;

        if(!name){
          throw new HttpError("Propriedade 'name' não encontrada no corpo da requisição", 404);
        }
  
        const dataUser:User = {
          id,
          name
        }
        const user = await this.updateUserUseCase.execute(dataUser);
        return response.status(200).json({ error: false, user });
      
  
  }
}
