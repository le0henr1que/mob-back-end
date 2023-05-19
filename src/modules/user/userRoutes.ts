import { Router } from 'express';
import { resolver } from '../../shared/errors/appError';
import { createUserController } from './useCase/CreateUser/index';
import { getUniqueUserController } from './useCase/GetUniqueUser/index';
import { updateUserController } from './useCase/UpdateUser/index';
import { createSolicitationConfirmEmailController } from './useCase/ConfirmEmail/index';
import authMiddleware from '../../middlewares/authentication/authenticationMiddleware';
import { getUserMeController } from '../user/useCase/GetUserMe';

const routerUser = Router();

routerUser.post(
  '/confirmar-email',
  authMiddleware,
  resolver((request, response) => {
    return createSolicitationConfirmEmailController.handle(request, response);
  }),
);

routerUser.post(
  '/user',
  resolver((request, response) => {
    return createUserController.handle(request, response);
  }),
);

routerUser.get(
  '/user/:id',
  authMiddleware,
  resolver((request, response) => {
    return getUniqueUserController.handle(request, response);
  }),
);

routerUser.get(
  '/users/me',
  authMiddleware,
  resolver((request, response) => {
    return getUserMeController.handle(request, response);
  }),
);

routerUser.put(
  '/user/:id',
  authMiddleware,
  resolver((request, response) => {
    return updateUserController.handle(request, response);
  }),
);
routerUser.put(
  '/user',
  authMiddleware,
  resolver((request, response) => {
    return updateUserController.handle(request, response);
  }),
);

export { routerUser };
