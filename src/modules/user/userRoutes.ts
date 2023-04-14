import { Router } from 'express';
import { resolver } from '../../shared/errors/appError';
import { createUserController } from './useCase/CreateUser/index';
import { getUniqueUserController } from './useCase/GetUniqueUser/index';
import { updateUserController } from './useCase/UpdateUser/index';

const routerUser = Router();

routerUser.post(
  '/user',
  resolver((request, response) => {
    return createUserController.handle(request, response);
  }),
);
routerUser.get(
  '/user/:id',
  resolver((request, response) => {
    return getUniqueUserController.handle(request, response);
  }),
);
routerUser.put(
  '/user/:id',
  resolver((request, response) => {
    return updateUserController.handle(request, response);
  }),
);

export { routerUser };
