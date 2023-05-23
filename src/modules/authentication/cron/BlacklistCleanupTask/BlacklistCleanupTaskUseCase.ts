import { IBlacklistCleanupTask } from '../../repositories/BlacklistCleanupTask/IBlacklistCleanupTask';
import { HttpError } from '../../../../shared/errors/appError';
import { verify } from 'jsonwebtoken';
import { jwtModule } from '../../../../config/Auth/auth';

export class BlacklistCleanupTaskUseCase {
  constructor(private blacklistCleanupTask: IBlacklistCleanupTask) {}

  async execute() {
    const blacklist = await this.blacklistCleanupTask.findAllSolicitation();
    const { secret } = jwtModule;

    await blacklist.map(async (content: any) => {
      try {
        verify(content.token, secret);
      } catch (error) {
        console.log('Deleted token exp -> ' + content.id);
        await this.blacklistCleanupTask.deleteToken(content.id);
      }
    });
  }
}
