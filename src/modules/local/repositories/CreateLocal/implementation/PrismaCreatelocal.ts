import { Local, Rating } from "types";
import { ICreateLocal } from "../ICreateLocal";
import { PrismaClient } from "@prisma/client";

export class PrismaRepositoryCreateLocal implements ICreateLocal {
  async executeCreate(dataLocal: Local): Promise<Local> {
    const prisma = new PrismaClient();
    const { name, rating } = dataLocal;
    return await prisma.local.create({
      data: {
        name: name,
        rating: rating
      },
    });
  }
  
}
