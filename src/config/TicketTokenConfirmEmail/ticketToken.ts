import { ModuleJWT } from 'types';

const jwtSecretTicketPassword = process.env.JWT_SECRET_CONFIRM_EMAIL;
const jwtExpireIn = process.env.JWT_EXPIRE_CONFIRM_EMAIL;

const jwtModule = <ModuleJWT>{
  secret: jwtSecretTicketPassword,
  expireIn: jwtExpireIn,
};

export { jwtModule };
