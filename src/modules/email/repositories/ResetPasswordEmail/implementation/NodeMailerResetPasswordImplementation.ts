import nodemailer from 'nodemailer';
import { ResetPasswordEmailService } from '../IResetPasswordImplementation';
import transporter from '../../../../../config/Email/emailConfig';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import handlebars from 'handlebars';
import { PasswordResetRequest, User } from 'types';

export class NodemailerEmailService implements ResetPasswordEmailService {
  async sendEmail(user: User, codeChallenge: string): Promise<void> {
    const { email, name } = user;

    const templateHtml = fs.readFileSync('src/modules/email/template/ResetPasswordEmail/index.html', 'utf-8');
    const compiledTemplate = handlebars.compile(templateHtml);

    const data = {
      title: `${name}, aqui está seu código`,
      name: name,
      code: codeChallenge,
    };

    const html = compiledTemplate(data);

    const mailOptions = {
      from: 'mob@mob.com',
      to: email,
      subject: `Mob!`,
      html: html,
    };

    await transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
      transporter.close();
    });
  }
}
