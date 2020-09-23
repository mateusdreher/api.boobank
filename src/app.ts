import express from 'express';
import cors from 'cors';
import { router } from './routes';
import 'reflect-metadata';
import { connect } from './database/connect';

const app = express();

connect();

app.use(express.json());
// APP.use(cors);
app.use(router);

export { app };