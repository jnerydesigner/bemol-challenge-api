import { getRepository } from 'typeorm';
import Client from '../database/entities/Client';

interface Request {
  email: string;
  cep: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  localidade: string;
  uf: string;
}

class UpdateEnderecoClientService {
  public async execute(data: Request): Promise<Client> {
    const clientRepository = getRepository(Client);

    const client = await clientRepository.findOne(data.email);

    if (!client) {
      throw Error;
    }

    client.cep = data.cep;
    client.logradouro = data.logradouro;
    client.bairro = data.bairro;
    client.numero = data.numero;
    client.complemento = data.complemento;
    client.localidade = data.localidade;
    client.uf = data.uf;

    await clientRepository.save(client);

    return client;
  }
}

export default UpdateEnderecoClientService;
