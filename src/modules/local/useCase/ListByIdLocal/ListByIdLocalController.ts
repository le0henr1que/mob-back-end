import { Response, Request } from "express";
import { ListByIdLocalUseCase } from "./ListByIdLocalUseCase";

export class ListByIdLocalController {
  constructor(private listByIdLocalUseCase: ListByIdLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
      const { id } = request.params

      const local = await this.listByIdLocalUseCase.execute(id);

      return response.status(200).json({ error: false, local });
   
  }
}
