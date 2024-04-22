import 'dotenv/config';
import express from 'express';
import routes from './routes/index.mjs';
import { applycommonMiddleware } from '../server/middleware/commonMiddleware.mjs';
import { getPortNumber, getEnvironment } from '../server/utils/environment.mjs';

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
