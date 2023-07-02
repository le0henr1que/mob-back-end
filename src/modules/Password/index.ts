import { resolver } from '../../shared/errors/appError';
import { createSolicitationResetPasswordController } from './useCase/CreateSolicitationResetPassword';
import { sendChallengeForEmailController } from './useCase/SendChallengeForEmail';
import { verifyCodeChallengeController } from './useCase/VerifyChallenge/index';
import { updatePasswordController } from './useCase/UpdatePassword/index';

import { Router } from 'express';

import middlewareTokenResetPassword from '../../middlewares/TokenResetPassword/middlewareTokenResetPassword';

const routerPassword = Router();

routerPassword.post(
  '/reset-password-request',
  resolver((request, response) => {
    return createSolicitationResetPasswordController.handle(request, response);
  }),
);

routerPassword.post(
  '/reset-password-request/send-email',
  middlewareTokenResetPassword,
  resolver((request, response) => {
    return sendChallengeForEmailController.handle(request, response);
  }),
);

routerPassword.post(
  '/reset-password-request/verify',
  middlewareTokenResetPassword,
  resolver((request, response) => {
    return verifyCodeChallengeController.handle(request, response);
  }),
);

routerPassword.post(
  '/reset-password-request/reset',
  middlewareTokenResetPassword,
  resolver((request, response) => {
    return updatePasswordController.handle(request, response);
  }),
);

export { routerPassword };
