import { Local } from 'types';
import { ICreateLocal } from '../../repositories/CreateLocal/ICreateLocal';

export class CreateLocalUseCase {
  constructor(private localRepositoryCreate: ICreateLocal) {}

  async execute(dataLocal: Local) {
    const { name, categoryId, address } = dataLocal;

    const addressId = await this.localRepositoryCreate.executeCreateAddress(address);
    const { id } = addressId;
    await this.localRepositoryCreate.executeCreate({ name, categoryId, id });

    const result: Local = {
      name: name,
      categoryId: categoryId,
      address: addressId,
    };

    return result;
  }
}
