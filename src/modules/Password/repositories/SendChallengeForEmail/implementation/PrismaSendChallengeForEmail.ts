import { EmailService } from '../ISendChallengeForEmail';
import { PrismaClient } from '@prisma/client';
import { User } from 'types';

export class PrismaEmailService implements EmailService {
  async getUser(to: string): Promise<User> {
    const prisma = new PrismaClient();

    return await prisma.user.findUnique({
      where: {
        email: to,
      },
      select: {
        id: true,
        name: true,
        email: true,
        accepted_terms: true,
        password: false,
        picture: true,
        rating: false,
        rasswordResetRequest: false,
      },
    });
  }

  async createCodeChallenge(to: string, codeChallenge: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.passwordResetRequest.updateMany({
      where: {
        user: {
          email: to,
        },
      },
      data: {
        codeChallenge: codeChallenge,
      },
    });
  }
}
