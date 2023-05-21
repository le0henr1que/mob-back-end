import nodemailer from 'nodemailer';
import { ConfirmEmailService } from '../IConfirmEmail';
import transporter from '../../../../../config/Email/emailConfig';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import handlebars from 'handlebars';
import { PasswordResetRequest, User } from 'types';
import { google } from 'googleapis';

export class NodemailerEmailService implements ConfirmEmailService {
  async sendEmail(user: User, token: string): Promise<void> {
    try {
      console.log('tenta enviar o email');
      const { email, name } = user;

      const templateHtml = fs.readFileSync('src/modules/email/template/ConfirmEmail/index.html', 'utf-8');
      const compiledTemplate = handlebars.compile(templateHtml);

      const data = {
        title: `${name}, passamos aqui para confirmar seu email!!`,
        name: name,
        link: `${process.env.ROUTE_CONFIRM_EMAIL}?solicitation_token=${token}`,
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
    } catch (error) {
      console.log('catch de envio de email');
      return;
    }
  }
}
