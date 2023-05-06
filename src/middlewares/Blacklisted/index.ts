import { blacklistController } from './useCase/index';
import { Request, Response, NextFunction } from 'express';

export function middlewareBlackList(request: Request, response: Response, next: NextFunction): any {
  blacklistController.handle(request, response, next);
}

export default middlewareBlackList;
