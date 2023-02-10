import { Response, Request } from "express";
import { ListRatingUseCase } from "./ListRatingUseCase";

export class ListRatingController{
  constructor(private listRatingUseCase: ListRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log(request.query);
      const rating = await this.listRatingUseCase.execute();
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