import { Router } from 'express';
import CreateClientService from '../services/CreateClientService';
import UpdateClientService from '../services/UpdateClientService';
import ResultsClientService from '../services/ResultsClientService';
import UpdateEnderecoClientService from '../services/UpdateEnderecoClientService';

const clientRouter = Router();

clientRouter.get('/results/:email', async (req, res) => {
  const { email } = req.params;

  const searchClient = new ResultsClientService();
  const client = await searchClient.execute({
    email,
  });
  return res.json(client);
});

clientRouter.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const createClient = new CreateClientService();
    const client = await createClient.execute({
      name,
      email,
    });

    return res.json(client);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

clientRouter.put('/:id', async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const createClient = new UpdateClientService();
    const client = await createClient.execute({
      id,
      name,
      email,
    });

    return res.json(client);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

clientRouter.put('/endereco/:email', async (req, res) => {
  try {
    const {
      email,
      bairro,
      cep,
      logradouro,
      numero,
      complemento,
      localidade,
      uf,
    } = req.body;
    const createClient = new UpdateEnderecoClientService();
    const client = await createClient.execute({
      email,
      cep,
      bairro,
      logradouro,
      numero,
      complemento,
      localidade,
      uf,
    });

    return res.json(client);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default clientRouter;
