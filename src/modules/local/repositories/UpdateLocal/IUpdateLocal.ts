import { Local } from 'types';

export interface UpdateLocal {
  executeUpdate(dataLocalUpdate: Local): Promise<Local>;
}
