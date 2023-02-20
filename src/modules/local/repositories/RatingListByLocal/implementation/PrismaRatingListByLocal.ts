import { Rating } from "types";
import { RatingListByLocal } from "../RatingListByLocal";
import { PrismaClient } from "@prisma/client";

export class PrismaRepositoryRatingListByLocal implements RatingListByLocal {
  async executeRatingListByLocal(localId: string): Promise<Rating[]> {
    const prisma = new PrismaClient();

    return await prisma.rating.findMany({
      where: {
        localId: localId,
      },
    });
  }
}
