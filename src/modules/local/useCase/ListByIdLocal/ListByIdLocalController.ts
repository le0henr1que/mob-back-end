import { Response, Request } from "express";
import { ListByIdLocalUseCase } from "./ListByIdLocalUseCase";

export class ListByIdLocalController {
  constructor(private listByIdLocalUseCase: ListByIdLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const local = await this.listByIdLocalUseCase.execute(
        request.params.id
      );
      return response.status(200).json({ error: false, local });
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
