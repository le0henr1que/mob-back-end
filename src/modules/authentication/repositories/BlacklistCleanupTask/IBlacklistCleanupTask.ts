import { User } from 'types';

export interface IBlacklistCleanupTask {
  findAllSolicitation(): Promise<any>;
  deleteToken(id: string): Promise<void>;
}
