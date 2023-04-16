import { Rating } from 'types';
import { ListByIdRating } from '../IListByIdRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryListByIdRating implements ListByIdRating {
  async executeListById(ratingId: string): Promise<any> {
    const prisma = new PrismaClient();

    return await prisma.rating.findUnique({
      where: {
        id: ratingId,
      },
       select:{
        id:true,
        userId:false, 
        rating:true,
        user:
        {
          select:{
              id:true,
            password:false,
              name:true, 
              email:true,
              accepted_terms:false
          }
        },
        localId:false,
        comment:true
       }
    });
  }
}
