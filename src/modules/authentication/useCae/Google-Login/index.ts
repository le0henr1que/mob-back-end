import * as Prisma from '../../repositories/Google-Login/implementation/PrismaGoogleLogin';
import { GoogleLoginController } from './GoogleLoginController';
import { GoogleLoginUseCase } from './GoogleLoginUseCase';

import { authenticationUseCase } from '../Login/index';
import { createUserUseCase } from '../../../user/useCase/CreateUser';
import { updateUserUseCase } from '../../../user/useCase/UpdateUser/index';

const PrismaUserRepositoryGoogleLogin = new Prisma.PrismaGoogleLogin();

const googleLoginnUseCase = new GoogleLoginUseCase(
  PrismaUserRepositoryGoogleLogin,
  authenticationUseCase,
  createUserUseCase,
  updateUserUseCase,
);

const googleLoginController = new GoogleLoginController(googleLoginnUseCase);

export { googleLoginnUseCase, googleLoginController };
