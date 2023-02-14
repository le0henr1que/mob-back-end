import { Rating } from "types";

export interface UpdateRating {
  executeUpdateRating(dataRatingUpdate: Rating): Promise<Rating>;
}
