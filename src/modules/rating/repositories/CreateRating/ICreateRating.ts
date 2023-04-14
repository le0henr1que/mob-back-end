import { Rating } from '../../../../types/types';

export interface ICreateRating {
  executeCreate(dataRating: Rating): Promise<Rating>;
}
