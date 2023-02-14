import { Response, Request } from "express";
import { GetUniqueUserUseCase } from "./GetUniqueUserUseCase";

export class GetUniqueUserController {
  constructor(private getUniqueUserUseCase: GetUniqueUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
        
      const user = await this.getUniqueUserUseCase.execute(request.params.id);
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
