import { Router, Request, Response } from 'express';
import { authenticationMiddleware } from './middlewares/authenticationMiddleware';
import { registerUserController } from '@useCases/RegisterUser';
import { saveAddressController } from '@useCases/SaveAddress';
import { loginController } from '@useCases/Login';
import { listTransationsConttroller } from '@useCases/ListTransations';
import { simulateNewTransationController } from '@useCases/SimulateNewTransation';
import { calculateBalanceController } from '@useCases/CalculateBalance';

const router = Router();

router.get('/', (response: Response) => {
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

router.post('/login', (request: Request, response: Response) => {
    return loginController.handle(request, response);
});


router.get('/transations', authenticationMiddleware, (request: Request, response: Response) => {
    return listTransationsConttroller.handle(request, response);
});

router.post('/transations', (request: Request, response: Response) => {
    return simulateNewTransationController.handle(request, response);
});

router.get('/balance', authenticationMiddleware, (request: Request, response: Response) => {
    return calculateBalanceController.handle(request, response);
});

export { router };