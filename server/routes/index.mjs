import express from 'express';
import contactRoutes from './contact.mjs';
import googleRoutes from './google.mjs';

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/google', googleRoutes);

export default router;
