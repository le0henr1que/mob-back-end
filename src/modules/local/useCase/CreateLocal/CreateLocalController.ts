import { Response, Request } from "express";
import { CreateLocalUseCase } from "./CreateLocalUseCase";

export class CreateLocalController {
  constructor(private createLocalUseCase: CreateLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const local = await this.createLocalUseCase.execute(request.body);
      return response.status(201).json({ error: false, local });

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
