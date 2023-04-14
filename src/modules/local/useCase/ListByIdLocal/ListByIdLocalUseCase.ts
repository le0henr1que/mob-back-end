import { ListByIdLocal } from '../../repositories/ListByIdLocal/IListByIdLocal';

export class ListByIdLocalUseCase {
  constructor(private LocalRepositoryListByIdLocal: ListByIdLocal) {}

  async execute(localId: string) {
    return await this.LocalRepositoryListByIdLocal.executeListById(localId);
  }
}
