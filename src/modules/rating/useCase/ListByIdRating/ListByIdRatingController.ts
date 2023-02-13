import { Response, Request } from "express";
import { ListByIdRatingRatingUseCase } from "./ListByIdRatingUseCase";

export class ListByIdRatingController {
  constructor(private listByIdRatingUseCase: ListByIdRatingRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const rating = await this.listByIdRatingUseCase.execute(
        request.params.id
      );
      return response.status(200).json({ error: false, rating });
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
