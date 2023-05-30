import { Local } from 'types';
import { ISearchLocal } from '../../repositories/SearchLocal/ISearchLocal';

export class SearchLocalUseCase {
  constructor(private localRepositorySearch: ISearchLocal) {}

  async execute(keyword: any) {
    console.log(keyword);
    return await this.localRepositorySearch.executSearch(keyword);
  }
}
