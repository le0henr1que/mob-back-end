export interface IUpdatePassword {
  updatePassword(id: string, newPassword: string): Promise<void>;
  removeSolicitation(id: string): Promise<void>;
}
