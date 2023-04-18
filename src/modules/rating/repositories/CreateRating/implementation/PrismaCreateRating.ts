import { Comment, Rating } from 'types';
import { ICreateRating } from '../ICreateRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateRating implements ICreateRating {
  async executeCreate(dataRating: Rating): Promise<Rating> {
    const prisma = new PrismaClient();
    const { rating, localId, userId } = dataRating;
    return await prisma.rating.create({
      data: {
        userId: userId,
        localId: localId,
        rating: rating,
      },
      select: {
        id: true,
        userId: false,
        localId: false,
        rating: true,
        createdAt: false,
        comment: false,
      },
    });
  }
  async executeCreateComment(dataComment: Comment): Promise<Comment> {
    const prisma = new PrismaClient();
    const { comment_text, title, ratingId } = dataComment;
    return await prisma.comment.create({
      data: {
        comment_text: comment_text,
        title: title,
        ratingId: ratingId,
      },
      select: {
        ratingId: false,
        id: false,
        comment_text: true,
        title: true,
        createdAt: true,
        // rating: true
      },
    });
  }
}
