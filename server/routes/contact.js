const express = require("express");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");
const { isValidInput, isEmail } = require("../helpers/inputValidation");
const verifyReCaptchaToken = require("../helpers/verifyReCaptchaToken");
const prisma = new PrismaClient();

const { RECAPTCHA_SCORE } = process.env;
const router = express.Router();
const upload = multer();

router.get("/", async (req, res) => {
  const formData = await prisma.form.findMany();
  res.json(formData);
});

router.post("/", upload.none(), async (req, res) => {
  const { email, name, message, token } = req.body;

  if (!isEmail(email)) {
    return res.status(400).send("Invalid email");
  }

  if (!isValidInput(name)) {
    return res.status(400).send("Invalid name");
  }

  if (!isValidInput(message)) {
    return res.status(400).send("Invalid message");
  }

  const { score } = await verifyReCaptchaToken(token);

  if (score <= Number(RECAPTCHA_SCORE)) {
    return res.status(400).send("reCaptcha failed");
  }

  try {
    await prisma.form.create({
      data: {
        email: email,
        name: name,
        message: message,
      },
    });
    res.status(200).send("Form submitted wuhu");
  } catch (error) {
    res.status(500).send("An error occurred while submitting the form");
  }
});

module.exports = router;
