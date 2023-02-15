import { Response, Request } from "express";
import { AppError } from "../../../../shared/errors/appError";
import { CreateRatingUseCase } from "./CreateRatingUseCase";

export class CreateRatingController {
  constructor(private createRatingUseCase: CreateRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // try {
      if(!request.body.name){
        throw new AppError("Propriedade 'name' não encontrada no corpo da requisição", 404);
      }
      const rating = await this.createRatingUseCase.execute(request.body);
      return response.status(201).json({ error: false, rating });
    // } catch (err) {
      // console.log(err);
      // if (err instanceof Error) {
      //   return response.status(400).json({
      //     error: true,
      //     message: err.message,
      //   });
      // } else {
      //   return response.status(400).json({
      //     error: true,
      //     message: "Unexpected error",
      //   });
      // }
    // }
  }
}
