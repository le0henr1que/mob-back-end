import { createLocalController } from './useCase/CreateLocal/index';
import { getLocalController } from './useCase/GetLocal/index';
import { listByIdLocalController } from './useCase/ListByIdLocal/index';
import { updateLocalController } from './useCase/UpdateLocal/index';
import { ratingListByLocalController } from './useCase/RatingListByLocal/index';
import { createCategoryController } from './useCase/CreateCategory/index';
import { searchLocalController } from './useCase/SearchLocal';
import { getLCategoryController } from './useCase/GetAllCategory';
import { createSubcategoryController } from './useCase/CreateSubcategory';
import { Router, response } from 'express';
import { resolver } from '../../shared/errors/appError';
import authMiddleware from '../../middlewares/authentication/authenticationMiddleware';
import middlewareBlackList from '../../middlewares/Blacklisted/index';
const routerLocal = Router();

routerLocal.post(
  '/local/subcategoria',
  authMiddleware,
  middlewareBlackList,
  resolver((request, response) => {
    return createSubcategoryController.handle(request, response);
  }),
);

routerLocal.post(
  '/local/category',
  authMiddleware,
  middlewareBlackList,
  resolver((request, response) => {
    return createCategoryController.handle(request, response);
  }),
);

routerLocal.get(
  '/local/category',
  resolver((request, response) => {
    return getLCategoryController.handle(request, response);
  }),
);

routerLocal.post(
  '/local',
  authMiddleware,
  middlewareBlackList,
  resolver((request, response) => {
    return createLocalController.handle(request, response);
  }),
);

routerLocal.get(
  '/search-local',
  resolver((request, response) => {
    return searchLocalController.handle(request, response);
  }),
);

routerLocal.get(
  '/local',
  resolver((request, response) => {
    return getLocalController.handle(request, response);
  }),
);
routerLocal.get(
  '/local/:id',
  resolver((request, response) => {
    return listByIdLocalController.handle(request, response);
  }),
);
routerLocal.get(
  '/local/:id/ratings',
  resolver((request, response) => {
    return ratingListByLocalController.handle(request, response);
  }),
);
routerLocal.put(
  '/local/:id',
  resolver((request, response) => {
    return updateLocalController.handle(request, response);
  }),
);

export { routerLocal };
