import { Response, Request } from 'express';
import { SendChallengeForUseCase } from './SendChallengeForEmailUseCase';

export class SendChallengeForEmailController {
  constructor(private sendChellangeForEmail: SendChallengeForUseCase) {}

  async handle(request: Request, response: Response) {
    await this.sendChellangeForEmail.execute(request.body.email);

    return response
      .status(200)
      .json({ error: false, message: 'Um email de redefinição de senha foi enviado para o endereço fornecido.' });
  }
}
