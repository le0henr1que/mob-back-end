import { Response, Request } from 'express';
import { CreateSolicitationConfirmEmailUseCase } from './CreateSolicitationConfirmEmailUseCase';

export class CreateSolicitationConfirmEmailController {
  constructor(private createSolicitationConfirmEmail: CreateSolicitationConfirmEmailUseCase) {}

  async handle(request: Request, response: Response) {
    const { authorization } = request.headers;

    const ticket = await this.createSolicitationConfirmEmail.execute(authorization);

    return response
      .status(200)
      .json({ error: false, message: 'Email de confirmação foi enviado para sua caixa de mensagem.' });
  }
}
