import { Response, Request } from "express";
import { UpdateLocalUseCase } from "./UpdateLocalUseCase";
import { Local } from "types";

export class UpdateLocalController {
  constructor(private updateLocalUseCase: UpdateLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
        const dataLocal: Local = {
            id: request.params.id,
            name: request.body.name
          };
    
          const local = await this.updateLocalUseCase.execute(dataLocal);
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
