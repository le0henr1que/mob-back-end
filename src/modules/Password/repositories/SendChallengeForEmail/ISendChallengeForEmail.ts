export interface EmailService {
  sendEmail?(to: string, codeChallenge: string): Promise<void>;
  createCodeChallenge?(to: string, codeChallenge: string): Promise<void>;
}
