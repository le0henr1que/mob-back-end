import { Local, Category } from 'types';
import { IGetCategory } from '../IGetCategory';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryGetCategory implements IGetCategory {
  async executeGet(): Promise<Category[]> {
    const prisma = new PrismaClient();
    const category = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        subcategory: true,
      },
    });

    return category;
  }
}
