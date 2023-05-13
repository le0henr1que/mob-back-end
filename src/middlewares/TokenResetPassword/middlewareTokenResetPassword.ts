import jwt, { TokenExpiredError, verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../shared/errors/appError';
import { jwtModule } from '../../config/TicketTokenResetPassword/ticketToken';
import { PrismaClient } from '@prisma/client';
import { decode } from 'punycode';

async function middlewareTokenResetPassword(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  const { secret, expireIn } = jwtModule;

  const prisma = new PrismaClient();

  if (!authorization) {
    throw new HttpError('Token not found', 404);
  }

  const [, onlyToken] = request.headers.authorization.split(' ');

  const decoded: any = verify(onlyToken, secret);

  const tokenId: any = await prisma.passwordResetRequest.findFirst({
    where: {
      token: onlyToken,
    },
  });

  if (!tokenId) {
    response.status(200).json({ error: false });
    return;
  }

  if (onlyToken !== tokenId.token) {
    response.status(401).json({ error: true, message: 'Invalid token' });
    return;
  }

  try {
    const decoded = verify(onlyToken, secret);
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      response.status(403).json({ error: true, message: 'Token expired' });
    } else {
      response.status(401).json({ error: true, message: 'Invalid token' });
    }
  }
}

export default middlewareTokenResetPassword;
