import nodemailer from 'nodemailer';
import { EmailService } from '../ISendChallengeForEmail';
import transporter from '../../../../../config/Email/emailConfig';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import handlebars from 'handlebars';

export class NodemailerEmailService implements EmailService {
  async sendEmail(to: string, codeChallenge: string): Promise<void> {
    const templateHtml = fs.readFileSync('src/Views/Template/ResetPassword/index.html', 'utf-8');
    const compiledTemplate = handlebars.compile(templateHtml);

    const data = {
      title: 'Alteração de Senha',
      name: 'John Doe',
      code: codeChallenge,
    };

    const html = compiledTemplate(data);

    const mailOptions = {
      from: 'no-reply@mob.com',
      to,
      subject: 'aqui está seu código',
      html: html,
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
