import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IBlacklistCleanupTask } from '../IBlacklistCleanupTask';

export class PrismaBlacklistCleanupTask implements IBlacklistCleanupTask {
  async deleteToken(id: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.blacklist.deleteMany({
      where: {
        id: id,
      },
    });
  }

  async findAllSolicitation(): Promise<any> {
    const prisma = new PrismaClient();

    const blacklist = await prisma.blacklist.findMany();
    return blacklist;
  }
}
