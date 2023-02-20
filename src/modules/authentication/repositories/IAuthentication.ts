import { User } from "types";

export interface IAuthentication {
  findEmail(email: string): Promise<User>;
}
