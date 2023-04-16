import { Local } from 'types';
import { ICreateLocal } from '../ICreateLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateLocal implements ICreateLocal {
  async executeCreate(dataLocal: Local): Promise<Local> {
    const prisma = new PrismaClient();
    const { name, category } = dataLocal;
    return await prisma.local.create({
      data: {
        name: name,
        category:category
        // rating: rating
      },
    });
  }
}
