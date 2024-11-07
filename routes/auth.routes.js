import { Router } from 'express';

const router = Router();
const users = [];
const favorites = []; // Simulação de favoritos

// Rota para cadastro
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  console.log('Recebido:', { username, password });

  if (!username || !password) {
  return res.status(400).json({ message: 'Username e password são obrigatórios' });
}

const userExists = users.find(user => user.username === username);
if (userExists) {
  return res.status(400).json({ message: 'Usuário já existe' });
}

const newUser = { id: users.length + 1, username, password };
users.push(newUser);
res.json(newUser);
});

// Rota para login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login bem-sucedido', data: user });
  } else {
    res.status(400).json({ message: 'Usuário ou senha incorretos' });
  }
});

// Rota para obter dados do usuário
router.get('/user', (req, res) => {
  // Simulação de dados do usuário
  const user = users[0]; // Supondo que o primeiro usuário seja o logado

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.status(200).json({ user, favorites });
});

export default router;