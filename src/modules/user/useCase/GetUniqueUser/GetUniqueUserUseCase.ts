import { User } from "types";
import { IGetUniqueUser } from "../../repositories/GetUniqueUser/IGetUniqueUser";

export class GetUniqueUserUseCase {
  constructor(private getUniiqueUserRepository: IGetUniqueUser) {}

  async execute(userId: string) {
    return await this.getUniiqueUserRepository.executeGetUniqueUser(userId);
  }
}
