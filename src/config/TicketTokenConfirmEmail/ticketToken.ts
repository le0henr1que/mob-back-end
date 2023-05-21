import { ModuleJWT } from 'types';

const jwtSecretTicketPassword = process.env.JWT_SECRET_CONFIRM_EMAIL;
const jwtExpireIn = process.env.JWT_EXPIRE_CONFIRM_EMAIL;

const jwtModuleConfirmEmail = <ModuleJWT>{
  secret: jwtSecretTicketPassword,
  expireIn: jwtExpireIn,
};

export { jwtModuleConfirmEmail };
