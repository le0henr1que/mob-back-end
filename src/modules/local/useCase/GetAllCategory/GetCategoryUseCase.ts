import { Category } from 'types';
import { IGetCategory } from '../../repositories/GetAllCategory/IGetCategory';

export class GetCategoryUseCase {
  constructor(private categoryRepositoryGet: IGetCategory) {}

  async execute() {
    return await this.categoryRepositoryGet.executeGet();
  }
}
