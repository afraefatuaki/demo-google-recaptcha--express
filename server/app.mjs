import express from 'express';
import routes from './routes/index.mjs';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port);
