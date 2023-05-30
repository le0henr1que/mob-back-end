import { Local } from 'types';
import { ICreateSubcategory } from '../../repositories/CreateSubcategory/ICreateSubcategory';

export class CreateSubcategoryUseCase {
  constructor(private subcategoryRepositoryCreate: ICreateSubcategory) {}

  async execute(dataSubcategory: string | [] | any, categoryId: number) {
    dataSubcategory.forEach(async (element: any) => {
      await this.subcategoryRepositoryCreate.createSubcategory(element, categoryId);
    });
  }
}
