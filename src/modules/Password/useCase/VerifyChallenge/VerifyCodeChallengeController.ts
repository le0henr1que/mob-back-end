import { Response, Request } from 'express';
import { VerifyChallengeUseCase } from './VerifyCodeChallengeUseCase';

export class VerifyChallengeController {
  constructor(private verifyChellangeUseCase: VerifyChallengeUseCase) {}

  async handle(request: Request, response: Response) {
    const { authorization } = request.headers;
    await this.verifyChellangeUseCase.execute(authorization, request.body.codeChallenge);

    return response.status(200).json({ error: false });
  }
}
