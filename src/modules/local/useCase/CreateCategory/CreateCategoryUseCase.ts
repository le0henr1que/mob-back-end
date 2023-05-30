import { Local } from 'types';
import { ICreateCategory } from '../../repositories/CreateCategory/ICreateCategory';

export class CreateCategoryUseCase {
  constructor(private categoryRepositoryCreate: ICreateCategory) {}

  async execute(dataCategory: string | [] | any) {
    dataCategory.forEach(async (element: any) => {
      await this.categoryRepositoryCreate.createCategory(element);
    });
  }
}
