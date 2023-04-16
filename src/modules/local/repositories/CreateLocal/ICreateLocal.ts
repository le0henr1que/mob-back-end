import { Local, Address } from '../../../../types/types';

export interface ICreateLocal {
  executeCreate(dataLocal: Local): Promise<Local>;
  executeCreateAddress(address: Address): Promise<Address>;
}
