import { ICreateSolicitationConfirmEmail } from '../IConfirmEmail';
import { PrismaClient } from '@prisma/client';

export class PrismaCreateSolicitationConfirmEmail implements ICreateSolicitationConfirmEmail {
  async getUser(id: string): Promise<any> {
    const prisma = new PrismaClient();

    const userId = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return userId;
  }

  async createSolicitation(userId: string, token: string): Promise<void> {
    const prisma = new PrismaClient();
    try {
      console.log('Exclui a solicitação já existente');
      await prisma.confirmEmailRequest.deleteMany({
        where: {
          userId: userId,
        },
      });
      console.log('Cria uma nova solicitação');
      await prisma.confirmEmailRequest.create({
        data: {
          userId: userId,
          token: token,
          status: 'pending',
        },
      });
    } catch (error) {
      return;
    }
  }
}
