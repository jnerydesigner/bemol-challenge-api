import { Request, Response } from 'express';

export default class ClientController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
  }
}
