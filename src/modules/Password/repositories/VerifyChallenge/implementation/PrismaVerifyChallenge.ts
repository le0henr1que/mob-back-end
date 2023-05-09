import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IVerifyChallenge } from '../IVerifyChallenge';

export class PrismaVerifyCodeChellange implements IVerifyChallenge {
  async findCodeChallenge(id: string): Promise<any> {
    const prisma = new PrismaClient();

    const codeChallenge = await prisma.passwordResetRequest.findFirst({
      where: {
        user: {
          id: id,
        },
      },
    });

    return codeChallenge.codeChallenge;
  }
}
