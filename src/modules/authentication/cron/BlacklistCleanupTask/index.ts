import * as Prisma from '../../repositories/BlacklistCleanupTask/implementation/PrismaBlacklistCleanupTask';
import { BlacklistCleanupTaskController } from './BlacklistCleanupTaskController';
import { BlacklistCleanupTaskUseCase } from './BlacklistCleanupTaskUseCase';

const prismaBlacklistCleanupTask = new Prisma.PrismaBlacklistCleanupTask();

const blacklistCleanupTaskUseCase = new BlacklistCleanupTaskUseCase(prismaBlacklistCleanupTask);

const blacklistCleanupTaskController = new BlacklistCleanupTaskController(blacklistCleanupTaskUseCase);

export { blacklistCleanupTaskUseCase, blacklistCleanupTaskController };
