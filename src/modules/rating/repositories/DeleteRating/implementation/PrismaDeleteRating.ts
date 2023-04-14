import { Rating } from 'types';
import { IDeleteRating } from '../IDeleteRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryDeleteRating implements IDeleteRating {
  async executeDelete(ratingId: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.rating.delete({
      where: {
        id: ratingId,
      },
    });
  }
}
