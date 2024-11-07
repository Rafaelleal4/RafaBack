import { Router } from 'express';

const router = Router();
const favorites = []; // Simulação de favoritos

router.post('/', (req, res) => {
  const { mangaId, userId, title } = req.body;
  if (!mangaId || !userId || !title) {
    return res.status(400).json({ error: 'ID do mangá, ID do usuário e título são obrigatórios' });
  }
  const newFavorite = { mangaId, userId, title };
  favorites.push(newFavorite);
  res.status(200).json({ message: 'Manga adicionado aos favoritos', favorite: newFavorite });
});

export default router;