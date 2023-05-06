import { authController } from './useCae/Login/index';
import { googleLoginController } from './useCae/Google-Login/index';
import { logoutController } from './useCae/Logout/index';

import { Router } from 'express';
import { resolver } from '../../shared/errors/appError';
import bruteforce from '../../middlewares/BruteForce/BruteForceMiddleware';

const authenticationRoute = Router();

authenticationRoute.post(
  '/logout',
  resolver((request, response) => {
    return logoutController.handle(request, response);
  }),
);

authenticationRoute.post(
  '/login',
  bruteforce,
  resolver((request, response) => {
    return authController.handle(request, response);
  }),
);

authenticationRoute.post(
  '/login/google',
  resolver((request, response) => {
    return googleLoginController.handle(request, response);
  }),
);

export { authenticationRoute };
