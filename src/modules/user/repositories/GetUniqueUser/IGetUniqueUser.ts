import { User } from "types";

export interface IGetUniqueUser {
  executeGetUniqueUser(userId: string): Promise<User>;
}
