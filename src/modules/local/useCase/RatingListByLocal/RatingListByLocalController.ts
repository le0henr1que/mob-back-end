import { Response, Request } from "express";
import { RatingListByLocalUseCase } from "./RatingListByLocalUseCase";

export class RatingListByLocalController {
  constructor(private ratingListByLocalUseCase: RatingListByLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ratingList = await this.ratingListByLocalUseCase.execute(id);
    return response.status(200).json({ error: false, ratingList });
  }
}
