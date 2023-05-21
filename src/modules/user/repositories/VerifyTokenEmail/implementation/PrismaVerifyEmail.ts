import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IVerifyTokenEmail } from '../IVerifyTokenEmail';

export class PrismaVerifyTokenConfirmEmail implements IVerifyTokenEmail {
  async updateSolicitation(userId: string): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.user.updateMany({
      where: {
        id: userId,
      },
      data: {
        confirmed_email: true,
      },
    });
  }
  async deleteSolicitation(token: string): Promise<void> {
    const prisma = new PrismaClient();
    await prisma.confirmEmailRequest.deleteMany({
      where: {
        token: token,
      },
    });
  }
  async verifySolicitation(token: string): Promise<any> {
    const prisma = new PrismaClient();
    const solicitation = await prisma.confirmEmailRequest.findMany({
      where: {
        token: token,
      },
    });
    return solicitation;
  }
}
