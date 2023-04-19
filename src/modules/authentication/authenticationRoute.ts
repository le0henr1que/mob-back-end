import { authController } from './useCae/Login/index';

import { Router } from 'express';
import { resolver } from '../../shared/errors/appError';
import bruteforce from '../../middlewares/BruteForce/BruteForceMiddleware';

const authenticationRoute = Router();

authenticationRoute.post(
  '/login',
  bruteforce,
  resolver((request, response) => {
    return authController.handle(request, response);
  }),
);

export { authenticationRoute };
