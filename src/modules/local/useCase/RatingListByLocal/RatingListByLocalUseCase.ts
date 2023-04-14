import { RatingListByLocal } from '../../repositories/RatingListByLocal/RatingListByLocal';

export class RatingListByLocalUseCase {
  constructor(private RepositoryRatingListByLocal: RatingListByLocal) {}

  async execute(localId: string) {
    return await this.RepositoryRatingListByLocal.executeRatingListByLocal(localId);
  }
}
