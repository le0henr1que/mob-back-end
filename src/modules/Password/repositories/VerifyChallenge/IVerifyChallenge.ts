export interface IVerifyChallenge {
  findCodeChallenge(id: string): Promise<any>;
  updateStatus(id: string): Promise<void>;
}
