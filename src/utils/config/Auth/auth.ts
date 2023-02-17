import { ModuleJWT } from "types";

const jwtSecret = process.env.JWT_SECRET;
const jwtExpireIn = process.env.JWT_EXPIRE;

  const jwtModule = <ModuleJWT>{
    secret: jwtSecret,
    expireIn: jwtExpireIn,
  };
  
  export { jwtModule };