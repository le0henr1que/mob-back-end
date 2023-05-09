import nodemailer from 'nodemailer';
import { EmailService } from '../ISendChallengeForEmail';
import transporter from '../../../../../config/Email/emailConfig';
import { PrismaClient } from '@prisma/client';

export class NodemailerEmailService implements EmailService {
  async sendEmail(to: string, codeChallenge: string): Promise<void> {
    const mailOptions = {
      from: 'no-reply@mob.com',
      to,
      subject: 'Alteração de senha',
      text: `Alteração de senha, seu código é: ${codeChallenge}`,
    };

    await transporter.sendMail(mailOptions);
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
