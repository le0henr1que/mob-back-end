import { HttpError } from '../../../shared/errors/appError';
import { IBlacklist } from '../repositories/IBlacklist';

export class BlacklistUseCase {
  constructor(private blacklist: IBlacklist) {}

  async execute(token: string) {
    const queryToken = await this.blacklist.queryToken(token);

    return queryToken;
  }
}
