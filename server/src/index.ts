import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './router/router';

import { loggerService } from './services/logger.service';

dotenv.config();

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(PORT, () => {
  loggerService('info', `Server was started on port ${PORT} . . .`);
});

//http://localhost:8000/
