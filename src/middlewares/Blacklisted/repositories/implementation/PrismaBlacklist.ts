import { PrismaClient } from '@prisma/client';

import { IBlacklist } from '../IBlacklist';

import { Blacklist } from 'types';

export class PrismaBlacklist implements IBlacklist {
  async queryToken(token: string): Promise<Blacklist[]> {
    const prisma = new PrismaClient();

    const blackList = await prisma.blacklist.findMany({
      where: {
        token: token,
      },
    });
    return blackList;
  }
}
