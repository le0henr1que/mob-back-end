import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { IUpdateUser } from '../IUpdateUser';

export class PrismaUpdateUser implements IUpdateUser {
  async executeUpdateUser(dataUser: User): Promise<User> {
    const prisma = new PrismaClient();
    const { id, name, email, password, cookieConsent } = dataUser;

    let data: any = {
      name: name,
      email: email,
      password: password,
      cookieConsent: cookieConsent,
    };

    data = Object.entries(data)
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    return await prisma.user.update({
      where: {
        id: id,
      },
      data,
    });
  }
  async executeVerifyId(id: string): Promise<User[]> {
    const prisma = new PrismaClient();

    return await prisma.user.findMany({
      where: {
        id: id,
      },
    });
  }
}
