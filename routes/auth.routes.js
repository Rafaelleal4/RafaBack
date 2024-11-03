import { Router } from 'express';

const router = Router();
const users = [];

// Rota para cadastro
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  console.log('Recebido:', { username, password });

  if (!username || !password) {
    console.log('Erro: Username e password são obrigatórios');
    return res.status(400).json({ message: 'Username e password são obrigatórios' });
  }

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    console.log('Erro: Usuário já existe');
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  console.log('Usuário cadastrado:', newUser);
  res.json(newUser);
});

// Rota para login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Tentativa de login:', { username, password });

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login bem-sucedido', data: user });
  } else {
    res.status(400).json({ message: 'Usuário ou senha incorretos' });
  }
});

export default router;