import { Router, Request, Response } from 'express';
import { registerUserController } from '@useCases/RegisterUser';

const ROUTER = Router();

ROUTER.get('/', (request: Request, response: Response) => {
    return response.status(200).send({
        title: 'Api BooBank',
        version: '0.0.1'
    });
});

ROUTER.post('/user', (request: Request, response: Response) => {
    return registerUserController.handle(request, response);
});


export { ROUTER };