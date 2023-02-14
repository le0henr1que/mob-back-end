import { Local } from "types";
import { ListByIdLocal } from "../IListByIdLocal";
import { PrismaClient } from "@prisma/client";

export class PrismaRepositoryListByIdLocal implements ListByIdLocal {
  async executeListById(localId: string): Promise<Local> {
    const prisma = new PrismaClient();

    return await prisma.local.findUnique({
      where: {
        id: localId,
      },
    });
  }
}
