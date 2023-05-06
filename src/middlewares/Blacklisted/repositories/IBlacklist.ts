import { Blacklist } from 'types';

export interface IBlacklist {
  queryToken(token: string): Promise<Blacklist[]>;
}
