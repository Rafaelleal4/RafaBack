import { Router } from 'express';

const router = Router();

// Rota para listar todos os mangás
router.get('/', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM mangas');
    res.json(result.rows);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Rota para adicionar um novo mangá
router.post('/add', async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await req.pool.query(
      'INSERT INTO mangas (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;