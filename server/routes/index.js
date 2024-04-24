const express = require('express');
const contactRoutes = require('./contact.js');
const googleRoutes = require('./google.js');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/google', googleRoutes);

module.exports = router;
