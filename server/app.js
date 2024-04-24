require('dotenv').config();
const express = require('express');
const routes = require('./routes/index.js');
const applycommonMiddleware = require('./middleware/commonMiddleware.js');
const { getPortNumber, getEnvironment } = require('./utils/environment.js');

const app = express();
const port = getPortNumber();
const environment = getEnvironment();

applycommonMiddleware(app);
app.use(routes);

const server = app.listen(port, () => {
  console.info(
    `🔌 Server listening at http://localhost:${port} as ${environment}`
  );
});
