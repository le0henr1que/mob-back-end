import { Local, Address, Category } from 'types';
import { ICreateCategory } from '../ICreateCategory';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateCategory implements ICreateCategory {
  async createCategory(categoryName: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.category.create({
      data: {
        name: categoryName,
      },
    });
  }
}
