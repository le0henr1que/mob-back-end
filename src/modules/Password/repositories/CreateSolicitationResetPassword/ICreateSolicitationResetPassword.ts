export interface ICreateSolicitationResetPassword {
  createSolicitation(userId: string, token: string): Promise<void>;
  getUserForEmail(email: string): Promise<any>;
}
