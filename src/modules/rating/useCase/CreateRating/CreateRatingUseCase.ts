
import { Rating } from "types";
import { ICreateRating } from "../../repositories/CreateRating/ICreateRating";

export class CreateRatingUseCase {
  constructor(private ratingRepositoryCreate: ICreateRating) {}

  async execute(dataRating:Rating) {
    return await this.ratingRepositoryCreate.executeCreate(dataRating)
  }
}