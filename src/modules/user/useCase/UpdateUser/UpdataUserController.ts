import { Response, Request } from "express";
import { User } from "types";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
        const dataUser:User = {
            id: request.params.id, 
            name: request.body.name
        }

        const user = await this.updateUserUseCase.execute(dataUser);
        
        return response.status(200).json({ error: false, user });
      
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        return response.status(400).json({
          error: true,
          message: err.message,
        });
      } else {
        return response.status(400).json({
          error: true,
          message: "Unexpected error",
        });
      }
    }
  }
}
