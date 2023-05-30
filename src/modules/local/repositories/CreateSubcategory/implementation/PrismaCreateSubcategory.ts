import { Local, Address, Subcategory } from 'types';
import { ICreateSubcategory } from '../ICreateSubcategory';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateSubcategory implements ICreateSubcategory {
  async createSubcategory(SubcategoryName: string, CategoryId: number): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.subcategory.create({
      data: {
        categoryId: CategoryId,
        name: SubcategoryName,
      },
    });
  }
}
