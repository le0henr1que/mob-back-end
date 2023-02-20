import { Rating } from "types";

export interface RatingListByLocal {
  executeRatingListByLocal(localId: string): Promise<Rating[]>;
}
