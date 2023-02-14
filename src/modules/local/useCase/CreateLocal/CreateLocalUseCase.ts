import { Local } from "types";
import { ICreateLocal } from "../../repositories/CreateLocal/ICreateLocal";

export class CreateLocalUseCase {
  constructor(private localRepositoryCreate: ICreateLocal) {}

  async execute(dataLocal: Local) {
    return await this.localRepositoryCreate.executeCreate(dataLocal);
  }
}
