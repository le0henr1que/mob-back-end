import { Local } from 'types';

export interface ListByIdLocal {
  executeListById(localId: string): Promise<Local>;
}
