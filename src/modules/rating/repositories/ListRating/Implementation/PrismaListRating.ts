import { Rating } from 'types';
import { IListRating } from '../IListRating';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryListRating implements IListRating {
  async executeList(): Promise<any[]> {
    
    const prisma = new PrismaClient();
    
    return await prisma.rating.findMany({
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