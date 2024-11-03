import { Router } from 'express';

const router = Router();

// Rota para cadastro
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username e password são obrigatórios' });
  }

  try {
    const result = await req.pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao cadastrar', error: err });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await req.pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    const user = result.rows[0];
    if (user) {
      res.json({ message: 'Login bem-sucedido', data: user });
    } else {
      res.status(400).json({ message: 'Usuário ou senha incorretos' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Erro ao fazer login', error: err });
  }
});

export default router;