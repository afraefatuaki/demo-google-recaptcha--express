import express from 'express';
import blogRoutes from './blog.mjs';
import googleRoutes from './google.mjs';

const router = express.Router();

router.use('/blog', blogRoutes);
router.use('/google', googleRoutes);

export default router;
