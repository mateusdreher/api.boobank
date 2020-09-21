import express from 'express';
import cors from 'cors';
import { ROUTER } from './routes';

const APP = express();


APP.use(express.json());
// APP.use(cors);
APP.use(ROUTER);

export { APP };