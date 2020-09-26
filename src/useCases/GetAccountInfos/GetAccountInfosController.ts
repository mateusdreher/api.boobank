import { Request, Response } from 'express';
import { GetAccountInfosUseCase } from './GetAccountInfosUseCase';

export class GetAccountInfosController {

    constructor (private getAccountInfosUseCase: GetAccountInfosUseCase){
    }

    async handle(request: Request, response: Response): Promise<Response> {

        const cod_usu = request.cod_usu;

        try {
            const account = await this.getAccountInfosUseCase.execute(cod_usu);

            return response.status(201).send({ 
                res: {
                    message: 'Success',
                    data: account
                }
            });
        }
        catch(error) {
            return response.status(400).json({
                res: {
                    message: error.message || 'Unexpected Error',
                    data: {}
                }
            });
        }
    }
}