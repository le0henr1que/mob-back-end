import { PrismaClient } from "@prisma/client";
import { User } from "types";
import { IAuthentication } from "../IAuthentication";

export class PrismaAuthentication implements IAuthentication {
  async findEmail(email: string): Promise<User> {
    const prisma = new PrismaClient()

    const userExist = await prisma.user.findFirst({
        where:{
          email:email
        }
    })
    console.log(userExist)
    return userExist;
  }
}