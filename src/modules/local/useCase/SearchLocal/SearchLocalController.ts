import { Response, Request } from 'express';
import { SearchLocalUseCase } from './SearchLocalUseCase';

export class SearchLocalController {
  constructor(private searchLocalUseCase: SearchLocalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const keyword = request.query.keyword;
    // console.log(request.query)
    const searchLocal = await this.searchLocalUseCase.execute(keyword);
    return response.status(200).json({ error: false, searchLocal });
  }
}
