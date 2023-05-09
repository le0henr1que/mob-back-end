import jwt, { TokenExpiredError, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../shared/errors/appError';
import { jwtModule } from '../../config/Auth/auth';

function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  const { secret, expireIn } = jwtModule;

  if (!authorization) {
    throw new HttpError('Token not found', 404);
  }

  const [, onlyToken] = request.headers.authorization.split(' ');

  try {
    const decoded = verify(onlyToken, secret);
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new HttpError('Token expired', 403);
    } else {
      throw new HttpError('Invalid token', 401);
    }
  }
}

export default authMiddleware;
