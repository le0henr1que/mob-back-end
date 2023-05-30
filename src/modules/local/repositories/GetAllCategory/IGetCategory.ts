import { Local, Category } from 'types';

export interface IGetCategory {
  executeGet(): Promise<Category[]>;
}
