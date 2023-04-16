import { Local } from 'types';
import { ICreateLocal } from '../../repositories/CreateLocal/ICreateLocal';

export class CreateLocalUseCase {
  constructor(private localRepositoryCreate: ICreateLocal) {}

  async execute(dataLocal: Local) {
    const { name, category, address } = dataLocal;

    const addressId = await this.localRepositoryCreate.executeCreateAddress(address);
    const { id } = addressId;
    await this.localRepositoryCreate.executeCreate({ name, category, id });

    const result: Local = {
      name: name,
      category: category,
      address: addressId,
    };

    return result;
  }
}
