require('dotenv').config();
const express = require('express');
const routes = require('./routes/index.js');
const applyCommonMiddleware = require('./middleware/commonMiddleware.js');

const app = express();

applyCommonMiddleware(app);
app.use(routes);

module.exports = app;
