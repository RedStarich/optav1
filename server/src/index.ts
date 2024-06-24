import 'dotenv/config';
import express from 'express';
import globalRouter from './global-router';
import { logger } from './logger';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(express.json());
app.use('/api/v1/', globalRouter);


app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
