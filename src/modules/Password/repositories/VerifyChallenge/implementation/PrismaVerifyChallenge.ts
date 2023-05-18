import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IVerifyChallenge } from '../IVerifyChallenge';

export class PrismaVerifyCodeChellange implements IVerifyChallenge {
  async updateStatus(id: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.passwordResetRequest.updateMany({
      where: {
        user: {
          id: id,
        },
      },
      data: {
        status: 'used',
      },
    });
  }

  async findCodeChallenge(id: string): Promise<any> {
    const prisma = new PrismaClient();

    const codeChallenge = await prisma.passwordResetRequest.findFirst({
      where: {
        user: {
          id: id,
        },
      },
    });

    return codeChallenge;
  }
}
