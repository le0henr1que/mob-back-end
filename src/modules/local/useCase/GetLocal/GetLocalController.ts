import { Response, Request } from 'express';
import { GetLocalUseCase } from './GetLocalUseCase';

export class GetLocalController {
  constructor(private getLocalUseCase: GetLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const local = await this.getLocalUseCase.execute();
    return response.status(200).json({ error: false, local });
  }
}
