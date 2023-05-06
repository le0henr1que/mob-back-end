import { BlacklistUseCase } from './BlacklistUseCase';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../../shared/errors/appError';
import { jwtModule } from '../../../utils/config/Auth/auth';
import jwt, { TokenExpiredError, verify } from 'jsonwebtoken';

export class BlacklistController {
  constructor(private blacklistUseCase: BlacklistUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
    const { authorization } = request.headers;
    const [, onlyToken] = authorization.split(' ');
    // console.log(onlyToken)

    const queryToken = await this.blacklistUseCase.execute(onlyToken);

    if (queryToken.length >= 1) {
      return response.status(403).send({ error: true, message: 'Acesso negado.' });
    }

    next();
  }
}
