import { Rating } from 'types';
import { RatingListByLocal } from '../RatingListByLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryRatingListByLocal implements RatingListByLocal {
  async executeRatingListByLocal(localId: string): Promise<any> {
    const prisma = new PrismaClient();

    return await prisma.rating.findMany({
      where: {
        localId: localId,
      },
      select: {
        id: true,
        userId: false,
        rating: true,
        user: {
          select: {
            id: true,
            password: false,
            name: true,
            email: true,
            accepted_terms: false,
          },
        },
        localId: false,
        comment: true,
      },
    });
  }
}
