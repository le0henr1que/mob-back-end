import { Response, Request } from "express";
import { UpdateRatingUseCase } from "./UpdateRatingUseCase";
import { Rating } from "types";

export class UpdateRatingController {
  constructor(private updateRatingUseCase: UpdateRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dataRating: Rating = {
        id: request.params.id,
        userId: request.body.userId,
        localId: request.body.localId,
        score: request.body.score,
      };

      const rating = await this.updateRatingUseCase.execute(dataRating);
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
