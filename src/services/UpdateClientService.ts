import { getRepository } from 'typeorm';
import Client from '../database/entities/Client';

interface Request {
  id: string;
  name: string;
  email: string;
}

class UpdateClientService {
  public async execute({ id, name, email }: Request): Promise<Client> {
    const clientRepository = getRepository(Client);

    const client = await clientRepository.findOne(id);

    if (!client) {
      throw Error;
    }

    client.name = name;
    client.email = email;

    await clientRepository.save(client);

    return client;
  }
}

export default UpdateClientService;
