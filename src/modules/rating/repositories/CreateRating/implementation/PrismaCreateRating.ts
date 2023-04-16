import { Rating } from 'types';
import { ICreateRating } from '../ICreateRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateRating implements ICreateRating {
  async executeCreate(dataRating: Rating): Promise<Rating> {
    const prisma = new PrismaClient();
    const { rating, localId, userId} = dataRating;
    return await prisma.rating.create({
      data: {
        userId: userId,
        localId: localId,
        rating: rating
      },
    });
  }
}
