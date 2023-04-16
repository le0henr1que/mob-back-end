import { Local } from 'types';
import { IGetLocal } from '../IGetLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryGetLocal implements IGetLocal {
  async executeGet(): Promise<Local[]> {
    const prisma = new PrismaClient();
    const local = await prisma.local.findMany({
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

    return local;
  }
}
