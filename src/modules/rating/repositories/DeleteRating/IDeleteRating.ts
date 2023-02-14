import { Rating } from "types";

export interface IDeleteRating {
  executeDelete(ratingId: String): Promise<void>;
}
