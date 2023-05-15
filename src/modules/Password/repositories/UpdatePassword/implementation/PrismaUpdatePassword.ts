import nodemailer from 'nodemailer';
import { IUpdatePassword } from '../IUpdatePassword';
import transporter from '../../../../../config/Email/emailConfig';
import { PrismaClient } from '@prisma/client';

export class PrismaUpdatePassword implements IUpdatePassword {
  async getStatusSolicitation(id: string): Promise<any> {
    const prisma = new PrismaClient();

    return await prisma.passwordResetRequest.findFirst({
      where: {
        userId: id,
      },
    });
  }

  async updatePassword(id: string, newPassword: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.user.updateMany({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
      },
    });
  }
  async removeSolicitation(id: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.passwordResetRequest.deleteMany({
      where: {
        userId: id,
      },
    });
  }
}
