import { Response, Request } from 'express';
import { CreateSolicitationResetPasswordUseCase } from './CreateSolicitationResetPasswordUseCase';

export class CreateSolicitationResetPasswordController {
  constructor(private createSolicitationResetPasswordUseCase: CreateSolicitationResetPasswordUseCase) {}

  async handle(request: Request, response: Response) {
    const ticket = await this.createSolicitationResetPasswordUseCase.execute(request.body.email);

    return response.status(200).json({ error: false, ticket });
  }
}
