import { ICreateSolicitationResetPassword } from '../ICreateSolicitationResetPassword';
import { PrismaClient } from '@prisma/client';

export class PrismaCreateSolicitationPassword implements ICreateSolicitationResetPassword {
  async getUserForEmail(email: string): Promise<any> {
    const prisma = new PrismaClient();

    const userId = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return userId;
  }

  async createSolicitation(userId: string, token: string): Promise<void> {
    const prisma = new PrismaClient();
    try {
      await prisma.passwordResetRequest.deleteMany({
        where: {
          userId: userId,
        },
      });

      await prisma.passwordResetRequest.create({
        data: {
          userId: userId,
          token: token,
        },
      });
    } catch (error) {
      return;
    }
  }
}
