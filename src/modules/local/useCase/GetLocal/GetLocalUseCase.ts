import { Local } from 'types';
import { IGetLocal } from '../../repositories/GetLocal/IGetLocal';

export class GetLocalUseCase {
  constructor(private localRepositoryGet: IGetLocal) {}

  async execute() {
    return await this.localRepositoryGet.executeGet();
  }
}
