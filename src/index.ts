import express from 'express';
import { router } from './routes';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();

export const prisma = new PrismaClient();

app.use(express.json());
app.use("/images", express.static('uploads'));

app.use(cors());

app.use(router);

app.listen(3333);