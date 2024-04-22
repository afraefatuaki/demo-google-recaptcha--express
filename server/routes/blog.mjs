import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Blog Route');
});

export default router;
