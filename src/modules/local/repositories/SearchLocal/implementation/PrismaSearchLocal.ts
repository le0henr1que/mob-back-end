import { Local } from 'types';
import { ISearchLocal } from '../ISearchLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositorySearchLocal implements ISearchLocal {
  async executSearch(keyword: string): Promise<Local[]> {
    const prisma = new PrismaClient();

    const local = await prisma.local.findMany({
      take: 15,
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        name: {
          startsWith: keyword,
        },
      },
      select: {
        id: true,
        name: true,
        category: false,
        address: false,
      },
    });

    return local;
  }
}
