import { PrismaClient } from '@prisma/client';
// import { Blacklist } from 'types';
import { ILogout } from '../ILogout';

export class PrismaLogout implements ILogout {
  async executeLogout(token: string, exp: Date): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.blacklist.create({
      data: {
        token: token,
        exp: exp,
      },
    });
  }
}
