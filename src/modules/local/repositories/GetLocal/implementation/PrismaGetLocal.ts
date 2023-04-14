import { Local } from 'types';
import { IGetLocal } from '../IGetLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryGetLocal implements IGetLocal {
  async executeGet(): Promise<Local[]> {
    const prisma = new PrismaClient();
    return await prisma.local.findMany({
      include: {
        _count: {
          select: {
            rating: true,
          },
        },
      },
    });
  }
}
