import { EntityRepository, Repository } from 'typeorm';
import Client from '../database/entities/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {}

export default ClientRepository;
