import jwt, { TokenExpiredError, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../shared/errors/appError';
import { jwtModule } from '../../config/Auth/auth';

async function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  const { secret, expireIn } = jwtModule;

  if (!authorization) {
    return response.status(404).json({ error: true, message: 'Token inexistente' });
  }

  const [, onlyToken] = request.headers.authorization.split(' ');

  try {
    verify(onlyToken, secret);
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return response.status(403).json({ error: true, message: 'Token expirado' });
    } else {
      return response.status(401).json({ error: true, message: 'Token Inválido' });
    }
  }
}
export default authMiddleware;
