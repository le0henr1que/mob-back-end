import { ListByIdRating } from '../../repositories/ListByIdRating/IListByIdRating';

export class ListByIdRatingRatingUseCase {
  constructor(private ratingRepositoryListByIdRating: ListByIdRating) {}

  async execute(ratingId: string) {
    return await this.ratingRepositoryListByIdRating.executeListById(ratingId);
  }
}
