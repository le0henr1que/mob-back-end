import { Request, Response } from 'express';
import { User } from 'types';
import { BlacklistCleanupTaskUseCase } from './BlacklistCleanupTaskUseCase';

export class BlacklistCleanupTaskController {
  constructor(private blacklistController: BlacklistCleanupTaskUseCase) {}

  async handle(): Promise<void> {
    await this.blacklistController.execute();
  }
}
