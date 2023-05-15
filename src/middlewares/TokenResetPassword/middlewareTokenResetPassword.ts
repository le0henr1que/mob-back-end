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
    response.status(404).json({ error: true, message: 'Token inexistente' });
    return;
  }

  const [, onlyToken] = authorization.split(' ');

  const tokenId: any = await prisma.passwordResetRequest.findFirst({
    where: {
      token: onlyToken,
    },
  });

  if (!tokenId) {
    response.status(200).json({ error: true, message: 'Invalid token' });
    return;
  }

  if (onlyToken !== tokenId.token) {
    response.status(401).json({ error: true, message: 'Invalid token' });
    return;
  }

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

export default middlewareTokenResetPassword;
