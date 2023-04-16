import { Rating } from 'types';
import { UpdateRating } from '../IUpdateRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryUpdateRating implements UpdateRating {
  async executeUpdateRating(dataRatingUpdate: Rating): Promise<Rating> {
    const prisma = new PrismaClient();

    const { id, userId, localId, rating } = dataRatingUpdate;

    return await prisma.rating.update({
      where: {
        id: id,
      },
      data: {
        userId: userId,
        localId: localId,
        rating: rating,
      },
    });
  }
}
