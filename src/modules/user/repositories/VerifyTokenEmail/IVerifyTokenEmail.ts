import { User } from 'types';

export interface IVerifyTokenEmail {
  verifySolicitation(token: string): Promise<any>;
  deleteSolicitation(token: string): Promise<void>;
  updateSolicitation(userId: string): Promise<void>;
}
