import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IGetUniqueUser } from '../IGetUniqueUser';

export class PrismaGetUniqueUser implements IGetUniqueUser {
  async executeGetUniqueUser(userId: string): Promise<User> {
    const prisma = new PrismaClient();

    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
