import * as Prisma from '../repositories/implementation/PrismaBlacklist';

import { BlacklistController } from './BlacklistController';
import { BlacklistUseCase } from './BlacklistUseCase';

const prismaBlacklist = new Prisma.PrismaBlacklist();

const blacklistUseCase = new BlacklistUseCase(prismaBlacklist);

const blacklistController = new BlacklistController(blacklistUseCase);

export { blacklistUseCase, blacklistController };
