import express, { NextFunction, Request, Response} from "express";
import { routerUser } from "./modules/user/userRoutes";
import { routerLocal } from "../src/modules/local/localRoutes";
import { routerRating } from "../src/modules/rating/ratingRoutes";
import { authenticationRoute } from "../src/modules/authentication/authenticationRoute";
import cors from "cors";
import { errorMiddleware } from './middlewares/error/errorMiddleware';
import { corsOptions } from "./utils/config/Server/cors";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./utils/config/swagger.json";



const app = express();

app.use(express.json());
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(cors(corsOptions));

app.use(routerUser);
app.use(routerLocal);
app.use(routerRating);
app.use(authenticationRoute);

app.use(errorMiddleware);


export { app };
