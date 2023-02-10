
import { IListRating } from "../../repositories/IListRating";

export class ListRatingUseCase {
  constructor(private ratingRepositoryListAll: IListRating) {}

  async execute() {
    return await this.ratingRepositoryListAll.executeList()
  }
}