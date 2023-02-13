import { IDeleteRating } from "../../repositories/DeleteRating/IDeleteRating";

export class DeleteRatingUseCase {
  constructor(private ratingRepositoryDelete: IDeleteRating) {}

  async execute(ratingId: string) {
    return await this.ratingRepositoryDelete.executeDelete(ratingId);
  }
}
