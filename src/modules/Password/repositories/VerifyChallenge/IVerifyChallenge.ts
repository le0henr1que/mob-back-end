export interface IVerifyChallenge {
  findCodeChallenge(id: string): Promise<any>;
}
