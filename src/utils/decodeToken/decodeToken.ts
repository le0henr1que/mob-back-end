import { verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import { HttpError } from '../../shared/errors/appError';

export async function decodeToken(token: string, secret: string): Promise<string> {
  try {
    const [, onlyToken] = token.split(' ');

    const decoded: any = verify(onlyToken, secret);
    return await decoded.id;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new HttpError('Token expirado', 401);
    } else if (error instanceof JsonWebTokenError) {
      throw new HttpError('Token inválido', 401);
    }
    throw new HttpError('Erro interno do servidor', 500);
  }
}
