import { Request, Response } from "express";
import { User } from "types";
import { AuthenticationCase } from "./AuthenticationUseCase";

export class authenticationController {
  constructor(private authenticationUseCase: AuthenticationCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const dataUser: User = {
      email,
      password,
    };
    const user = await this.authenticationUseCase.execute(dataUser);

    return response.status(200).send({ error: false, ...user });
  }
}
