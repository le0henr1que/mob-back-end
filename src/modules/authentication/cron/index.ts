import cron from 'node-cron';
import { blacklistCleanupTaskController } from './BlacklistCleanupTask/index';

export const blacklistCleanupTask = () => {
  cron.schedule('0 7 * * 3', () => {
    console.log('Start Cron');
    blacklistCleanupTaskController.handle();
  });
};
