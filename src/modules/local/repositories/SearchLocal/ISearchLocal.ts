import { Local } from 'types';

export interface ISearchLocal {
  executSearch(keyword: string): Promise<Local[]>;
}
