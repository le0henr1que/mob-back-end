import { UpdateRating } from "../../repositories/UpdateRating/IUpdateRating";
import { Rating } from "types";

export class UpdateRatingUseCase {
  constructor(private ratingRepositoryUpdateAll: UpdateRating) {}

  async execute(dataRating: Rating) {
    return await this.ratingRepositoryUpdateAll.executeUpdateRating(dataRating);
  }
}
