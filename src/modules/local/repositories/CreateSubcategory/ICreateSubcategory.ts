import { Local, Address, Subcategory } from '../../../../types/types';

export interface ICreateSubcategory {
  createSubcategory(SubcategoryName: string, CategoryId: number): Promise<void>;
}
