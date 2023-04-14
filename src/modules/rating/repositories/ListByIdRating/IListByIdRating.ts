import { Rating } from 'types';

export interface ListByIdRating {
  executeListById(ratingId: string): Promise<Rating>;
}
