import { Router } from 'express';
import mangaRoutes from './manga.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router.use('/manga', mangaRoutes);
router.use('/auth', authRoutes);

export default router;