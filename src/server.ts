import express from 'express';
import cors from 'cors';
import './database';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.json({ message: 'Hello Word' }));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${process.env.SERVER_PORT} 🔥 `);
});
