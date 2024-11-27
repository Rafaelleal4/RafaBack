import { Router } from "express";

const router = Router();
const users = [];
let loggedInUserID = null; // Variável para armazenar o ID do usuário logado

// Rota para cadastro
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  console.log("Recebido:", { username, password });

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username e password são obrigatórios" });
  }

  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const newUser = { id: users.length + 1, username, password, favorites: [] };
  users.push(newUser);
  res.json(newUser);
});

// Rota para login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    loggedInUserID = user.id; // Armazena o usuário logado
    res.json({ message: "Login bem-sucedido", data: user });
  } else {
    res.status(400).json({ message: "Usuário ou senha incorretos" });
  }
});

// Rota para logout
router.post("/logout", (req, res) => {
  loggedInUserID = null; // Reseta o ID do usuário logado
  res.json({ message: "Logout bem-sucedido" });
});

// Rota para obter dados do usuário logado
router.get("/user", (req, res) => {
  if (!loggedInUserID) {
    return res.status(401).json({ message: "Nenhum usuário logado" });
  }

  const user = users.find((user) => user.id === loggedInUserID);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ user });
});

// Rota para obter todos os usuários
router.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: "Nenhum usuário registrado" });
  }
  res.status(200).json({ users });
});

// Rota para adicionar um mangá aos favoritos do usuário logado
router.post("/favorites", (req, res) => {
  if (!loggedInUserID) {
    return res.status(401).json({ message: "Nenhum usuário logado" });
  }

  const { mangaId } = req.body;
  const user = users.find((user) => user.id === loggedInUserID); // Acessa o usuário logado

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  // Verifica se o mangá já está nos favoritos do usuário
  const isFavorite = user.favorites.some((fav) => fav.mangaId === mangaId);
  if (isFavorite) {
    return res.status(400).json({ message: "Mangá já está nos favoritos" });
  }

  // Adiciona o mangá aos favoritos do usuário
  const favorite = { mangaId };
  user.favorites.push(favorite);

  // Retorna a mensagem de sucesso e o mangá adicionado aos favoritos para o usuário
  res.status(200).json({
    message: `Mangá adicionado aos favoritos de ${user.username}`, // Usando username
    favorite,
  });
});

// Rota para obter os favoritos do usuário logado
router.get("/favorites", (req, res) => {
  if (!loggedInUserID) {
    return res.status(401).json({ message: "Nenhum usuário logado" });
  }

  const user = users.find((user) => user.id === loggedInUserID);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ favorites: user.favorites });
});

// Rota para remover um mangá dos favoritos do usuário logado
router.delete("/favorites/:mangaId", (req, res) => {
  if (!loggedInUserID) {
    return res.status(401).json({ message: "Nenhum usuário logado" });
  }

  const { mangaId } = req.params;
  const user = users.find((user) => user.id === loggedInUserID); // Acessa o usuário logado

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  // Remove o mangá dos favoritos do usuário
  user.favorites = user.favorites.filter((fav) => fav.mangaId !== mangaId);

  // Retorna a mensagem de sucesso
  res.status(200).json({ message: "Mangá removido dos favoritos" });
});

export default router;