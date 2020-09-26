import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes';
import 'reflect-metadata';
import { connect } from './database/connect';

const app = express();
app.use(cors());
app.options('*', cors());

connect();

app.use(express.json());

app.use(router);

export { app };