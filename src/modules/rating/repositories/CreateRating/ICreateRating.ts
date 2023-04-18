import { Rating, Comment } from '../../../../types/types';

export interface ICreateRating {
  executeCreate(dataRating: Rating): Promise<Rating>;
  executeCreateComment(dataComment:Comment): Promise<Comment>;
}
