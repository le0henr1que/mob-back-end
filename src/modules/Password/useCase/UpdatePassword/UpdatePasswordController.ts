import { Response, Request } from 'express';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController {
  constructor(private updatePasswordUseCase: UpdatePasswordUseCase) {}

  async handle(request: Request, response: Response) {
    const { newPassword, codeChallenge } = request.body;
    const { authorization } = request.headers;
    await this.updatePasswordUseCase.execute(authorization, newPassword, codeChallenge);

    return response.status(200).json({ error: false, message: 'Senha alterada com sucesso!' });
  }
}
