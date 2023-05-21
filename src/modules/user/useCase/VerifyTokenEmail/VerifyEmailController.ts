import { Response, Request } from 'express';
import { VerifyTokenEmailUseCase } from './VerifyEmailUseCase';
import { HttpError } from '../../../../shared/errors/appError';

export class VerifyTokenController {
  constructor(private verifyTokenUseCase: VerifyTokenEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;
    const user = await this.verifyTokenUseCase.execute(authorization);

    return response
      .status(200)
      .json({
        error: false,
        message:
          'A confirmação do seu e-mail foi concluída com sucesso! Agora você pode fechar esta página. Obrigado por confirmar o seu e-mail e por fazer parte da nossa comunidade. Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato conosco.',
      });
  }
}
