import { IAuthentication } from "../repositories/IAuthentication";
import { User } from "types";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { jwtModule } from "../../../utils/config/Auth/auth";
import { HttpError } from "../../../shared/errors/appError";

export class AuthenticationCase {
  constructor(private authenticationRepository: IAuthentication) {}

  async execute(dataUser: User) {

    const { password, email, name} = dataUser

    const searchUser = await this.authenticationRepository.findEmail(email);

    if (!searchUser) {
        throw new HttpError("User not exist", 404);
    }
    
    if (!(await compare(password, searchUser.password))) {
        throw new HttpError("Invalid password", 401);
    }

    const user:User = {
      name: searchUser.name,
      email: searchUser.email,
      token:  sign({ id: searchUser.id }, jwtModule.secret, {
          expiresIn: jwtModule.expireIn,
        }),
    };
    
    return user;
    
  }
}