import { Local, Rating } from "types";
import { UpdateLocal } from "../IUpdateLocal";
import { PrismaClient } from "@prisma/client";

export class PrismaRepositoryUpdateLocal implements UpdateLocal{
    async executeUpdate(dataLocalUpdate: Local): Promise<Local> {
        const prisma = new PrismaClient();

        const { name, id } = dataLocalUpdate;

        return await prisma.local.update({
            where: {
                id:id
            }, 
            data:{
                name:name
            }
        })
    }
}