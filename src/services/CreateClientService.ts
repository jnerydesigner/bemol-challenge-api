import { getRepository } from 'typeorm';
import Client from '../database/entities/Client';
import AppError from '../error/AppError';

interface Request {
  name: string;
  email: string;
}

class CreateClientService {
  public async execute({ name, email }: Request): Promise<Client> {
    const clientRepository = getRepository(Client);
    const findClient = await clientRepository.findOne({
      email,
    });
    if (findClient) {
      return findClient;
    }
    const client = clientRepository.create({
      name,
      email,
    });

    await clientRepository.save(client);

    return client;
  }
}

export default CreateClientService;
