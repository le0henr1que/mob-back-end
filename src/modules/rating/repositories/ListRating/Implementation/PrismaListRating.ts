import { Rating } from 'types';
import { IListRating } from '../IListRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryListRating implements IListRating {
  async executeList(): Promise<Rating[]> {
    const prisma = new PrismaClient();
    return await prisma.rating.findMany();
  }
}
