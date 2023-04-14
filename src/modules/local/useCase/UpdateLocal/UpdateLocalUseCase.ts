import { UpdateLocal } from '../../repositories/UpdateLocal/IUpdateLocal';
import { Local } from 'types';

export class UpdateLocalUseCase {
  constructor(private LocalRepositoryUpdateLocal: UpdateLocal) {}

  async execute(dataLocalUpdate: Local) {
    return await this.LocalRepositoryUpdateLocal.executeUpdate(dataLocalUpdate);
  }
}
