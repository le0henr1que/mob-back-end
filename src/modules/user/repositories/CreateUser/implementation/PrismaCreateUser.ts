import { PrismaClient } from '@prisma/client';
import { User } from 'types';
import { ICreateUser } from '../ICreateUser';

export class PrismaCreateUser implements ICreateUser {
  async executeCreateUser(dataUser: User): Promise<User> {
    const prisma = new PrismaClient();
    const { name, email, password, accepted_terms, picture, cookieConsent } = dataUser;

    return await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        accepted_terms: accepted_terms,
        picture: picture,
        cookieConsent: cookieConsent,
      },
    });
  }
  async executeVerifyEmail(email: string): Promise<User[]> {
    const prisma = new PrismaClient();

    return await prisma.user.findMany({
      where: {
        email: email,
      },
    });
  }
}
