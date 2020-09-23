import { Router, Request, Response } from 'express';
import { registerUserController } from '@useCases/RegisterUser';
import { saveAddressController } from '@useCases/SaveAddress';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    return response.status(200).send({
        title: 'Api BooBank',
        version: '0.0.1'
    });
});

router.post('/register', (request: Request, response: Response) => {
    return registerUserController.handle(request, response);
});

router.post('/address', (request: Request, response: Response) => {
    return saveAddressController.handle(request, response);
});


export { router };