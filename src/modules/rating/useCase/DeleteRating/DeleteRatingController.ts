import { Response, Request } from "express";
import { HttpError } from "../../../../shared/errors/appError";
import { DeleteRatingUseCase } from "./DeleteRatingUseCase";

export class DeleteRatingController {
  constructor(private deleteRatingUseCase: DeleteRatingUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

      await this.deleteRatingUseCase.execute(request.params.id);
      return response.status(204).json({ error: false });
   
  }
}
