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
      userId: decoded.id,
    },
  });

  try {
    if (!tokenId) {
      response.status(401).json({ error: true, message: 'Invalid token' });
    }
    if (tokenId.token !== onlyToken) {
      response.status(401).json({ error: true, message: 'Invalid token' });
    }

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new HttpError('Token expired', 403);
    } else {
      throw new HttpError('Invalid token', 401);
    }
  }
}

export default middlewareTokenResetPassword;
