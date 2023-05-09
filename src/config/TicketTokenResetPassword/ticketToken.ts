import { ModuleJWT } from 'types';

const jwtSecretTicketPassword = process.env.JWT_SECRET_RESET_PASSWORD;
const jwtExpireIn = process.env.JWT_EXPIRE_RESET_PASSWORD;

const jwtModule = <ModuleJWT>{
  secret: jwtSecretTicketPassword,
  expireIn: jwtExpireIn,
};

export { jwtModule };
