import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { loggerService } from './services/logger.service';

dotenv.config();

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

app.use(express.json);
app.use(cors());

app.listen(PORT, () => {
  // console.log(`Server was started on port ${PORT} . . .`);
  loggerService('info', `Server was started on port ${PORT} . . .`);
});
