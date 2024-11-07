import { Router } from 'express';

const router = Router();

let favorites = [];

router.post('/favorites', (req, res) => {
  const { mangaId, userId } = req.body;
  console.log('Dados recebidos no backend:', req.body); // Adicione esta linha para depuração
  if (!mangaId || !userId) {
    return res.status(400).send('Manga ID e User ID são obrigatórios');
  }

  const favorite = { mangaId, userId };
  favorites.push(favorite);
  res.status(201).send({ favorites });
});

export default router;