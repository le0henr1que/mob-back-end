import express, { NextFunction, Request, Response } from 'express';
import { routerUser } from './modules/user/userRoutes';
import { routerLocal } from './modules/local/localRoutes';
import { routerRating } from './modules/rating/ratingRoutes';
import { authenticationRoute } from './modules/authentication/authenticationRoute';
// @ts-ignore
import { routerPassword } from './modules/password/passwordRoutes';
import cors from 'cors';

import { errorMiddleware } from './middlewares/error/errorMiddleware';
import { corsOptions } from './config/Server/cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './utils/swagger/swagger.json';
import { blacklistCleanupTask } from './modules/authentication/cron/index';

const app = express();

app.use(express.json());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(cors(corsOptions));

app.use(routerUser);
app.use(routerLocal);
app.use(routerRating);
app.use(routerPassword);
app.use(authenticationRoute);
app.use(errorMiddleware);
blacklistCleanupTask();

export { app };
