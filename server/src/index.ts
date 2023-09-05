import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

console.log(process.env.PORT);

app.use(express.json);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT} . . .`);
});
