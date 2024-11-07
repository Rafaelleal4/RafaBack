import { Router } from 'express';
import authRoutes from './auth.routes.js';
import favoritesRoutes from './favorites.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/favorites', favoritesRoutes);

export default router;