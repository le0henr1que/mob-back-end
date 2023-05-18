import { verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../../shared/errors/appError';
import { jwtModule } from '../../config/Auth/auth';

export async function decodeTokenUser(token: string): Promise<string> {
  try {
    console.log(token);
    const { secret } = jwtModule;
    const [, onlyToken] = token.split(' ');
    const decoded: any = verify(onlyToken, secret);

    return decoded.id;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new HttpError('Token expirado', 401);
    } else if (error instanceof JsonWebTokenError) {
      throw new HttpError('Token inválido', 401);
    }
    throw new HttpError('Erro interno do servidor', 500);
  }
}
