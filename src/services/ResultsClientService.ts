import { getRepository } from 'typeorm';
import Client from '../database/entities/Client';

interface Request {
  email: string;
}

class CreateClientService {
  public async execute({ email }: Request): Promise<Client | undefined> {
    const clientRepository = getRepository(Client);

    const findClient = await clientRepository.findOne({
      email,
    });

    return findClient;
  }
}

export default CreateClientService;
