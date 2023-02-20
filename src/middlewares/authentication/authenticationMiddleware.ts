import jwt, { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../shared/errors/appError";
import { jwtModule } from "../../utils/config/Auth/auth";

function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  const { secret, expireIn } = jwtModule;

  if (!authorization) {
    throw new HttpError("non-exist token", 404);
  }

  const [, onlyToken] = request.headers.authorization.split(" ");
  const decoded = verify(onlyToken, secret);

  if (!decoded) {
    throw new HttpError("Expired Token", 403);
  }
}

export default authMiddleware;
