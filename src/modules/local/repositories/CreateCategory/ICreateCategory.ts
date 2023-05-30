import { Local, Address, Category } from '../../../../types/types';

export interface ICreateCategory {
  createCategory(categoryName: string): Promise<void>;
}
