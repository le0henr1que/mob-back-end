import { Comment, Rating } from 'types';
import { ICreateRating } from '../../repositories/CreateRating/ICreateRating';

export class CreateRatingUseCase {
  constructor(private ratingRepositoryCreate: ICreateRating) {}

  async execute(dataRating: Rating) {
    const { title, comment_text} = dataRating.comment
      
    const rating = await this.ratingRepositoryCreate.executeCreate(dataRating);

    const comment:Comment = {
      comment_text: comment_text,
      ratingId: rating.id,
      title:title,
    }

    const commentRating = await this.ratingRepositoryCreate.executeCreateComment(comment)

 
    return commentRating

  }
}
