import { Local, Address } from 'types';
import { ICreateLocal } from '../ICreateLocal';
import { PrismaClient } from '@prisma/client';

export class PrismaRepositoryCreateLocal implements ICreateLocal {
  async executeCreate(dataLocal: Local): Promise<Local> {
    const prisma = new PrismaClient();
    const { name, category, id } = dataLocal;
    return await prisma.local.create({
      data: {
        name: name,
        category: category,
        addressId: id,
      },
    });
  }
  async executeCreateAddress(address: Address): Promise<Address> {
    const prisma = new PrismaClient();
    const { cep, complement, number, logradouro, bairro, city, state } = address;

    return await prisma.address.create({
      data: {
        cep: cep,
        complement: complement,
        number: number,
        logradouro: logradouro,
        bairro: bairro,
        city: city,
        state: state,
      },
    });
  }
}
