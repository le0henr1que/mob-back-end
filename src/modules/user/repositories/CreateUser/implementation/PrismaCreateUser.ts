import { PrismaClient } from "@prisma/client";
import { User } from "types";
import { ICreateUser } from "../ICreateUser";

export class PrismaCreateUser implements ICreateUser {
  async executeCreateUser(dataUser: User): Promise<User> {
    const prisma = new PrismaClient();
    const { name, email, password } = dataUser;

    return await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  }
}
