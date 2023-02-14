import { User } from "types";
import { ICreateUser } from "../../repositories/CreateUser/ICreateUser";

export class CreateUserUseCase {
    constructor(private createUserRepository: ICreateUser){}

    async execute(dataUser: User) {
        return await this.createUserRepository.executeCreateUser(dataUser);
    }
}