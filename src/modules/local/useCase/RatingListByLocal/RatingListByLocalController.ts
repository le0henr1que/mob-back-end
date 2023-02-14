import { Response, Request } from "express";
import { RatingListByLocalUseCase } from "./RatingListByLocalUseCase";

export class RatingListByLocalController {
  constructor(private ratingListByLocalUseCase: RatingListByLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
        const ratingList = await this.ratingListByLocalUseCase.execute(
          request.params.id
        );
        return response.status(200).json({ error: false, ratingList });
        
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
