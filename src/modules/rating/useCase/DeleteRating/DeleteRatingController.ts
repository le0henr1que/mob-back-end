import { Response, Request } from "express";
import { DeleteRatingUseCase } from "./DeleteRatingUseCase";

export class DeleteRatingController {
  constructor(private deleteRatingUseCase: DeleteRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deleteRatingUseCase.execute(request.params.id);
      return response.status(204).json({ error: false });
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
