import { Rating } from 'types';
import { ListByIdRating } from '../IListByIdRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryListByIdRating implements ListByIdRating {
  async executeListById(ratingId: string): Promise<Rating> {
    const prisma = new PrismaClient();

    return await prisma.rating.findUnique({
      where: {
        id: ratingId,
      },
    });
  }
}
