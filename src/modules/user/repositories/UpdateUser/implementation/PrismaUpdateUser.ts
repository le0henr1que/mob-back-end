import { PrismaClient } from "@prisma/client";
import { User } from "types";
import { IUpdateUser } from "../IUpdateUser";

export class PrismaUpdateUser implements IUpdateUser {
  async executeUpdateUser(dataUser: User): Promise<User> {
    const prisma = new PrismaClient();
    const { id, name, email, password } = dataUser;

    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  }
}
