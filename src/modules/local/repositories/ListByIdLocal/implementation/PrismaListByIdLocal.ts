import { Local } from 'types';
import { ListByIdLocal } from '../IListByIdLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryListByIdLocal implements ListByIdLocal {
  async executeListById(localId: string): Promise<Local> {
    const prisma = new PrismaClient();

    return await prisma.local.findUnique({
      where: {
        id: localId,
      },
      select: {
        id: true,
        name: true,
        address: {
          select: {
            id: true,
            cep: true,
            complement: true,
            number: true,
            logradouro: true,
            bairro: true,
            city: true,
            state: true,
          },
        },
        _count: {
          select: {
            rating: true,
          },
        },
      },
    });
  }
}
