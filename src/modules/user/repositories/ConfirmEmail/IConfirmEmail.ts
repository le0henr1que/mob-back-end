export interface ICreateSolicitationConfirmEmail {
  createSolicitation(userId: string, token: string): Promise<void>;
  getUser(id: string): Promise<any>;
}
