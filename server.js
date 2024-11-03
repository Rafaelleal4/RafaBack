import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import router from './routes/index.routes.js';

const { Pool } = pkg;

const app = express();
const port = 5000;

const pool = new Pool({
  connectionString: 'postgres://rafael:rafael@localhost:5432/database',
});

app.use(cors()); // Adicione esta linha para habilitar CORS
app.use(express.json());
app.use((req, res, next) => {
  req.pool = pool;
  next();
});
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port} ☀️`);
});