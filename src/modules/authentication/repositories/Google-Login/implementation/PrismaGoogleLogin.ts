import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IGoogleLogin } from '../IGoogleLogin';

export class PrismaGoogleLogin implements IGoogleLogin {
  async findUser(email: string): Promise<User[]> {
    const prisma = new PrismaClient();

    return await prisma.user.findMany({
      where: {
        email: email,
      },
    });
  }
}
