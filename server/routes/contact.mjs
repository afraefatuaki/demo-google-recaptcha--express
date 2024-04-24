import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
  const formData = await prisma.form.findMany();
  res.json(formData);
});

router.post('/', async (req, res) => {
  const { email, name, message } = req.body;
  await prisma.form.create({
    data: {
      email,
      name,
      message,
    },
  });

  res.send('Form submitted');
});

export default router;
