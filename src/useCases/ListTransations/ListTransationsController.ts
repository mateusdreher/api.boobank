import { Request, Response } from 'express';
import { ListTransationsUseCase } from './ListTransationsUseCase';

export class ListTransationsConttroller {

    constructor(private lisTransationsUseCase: ListTransationsUseCase){
    }

    async handle(request: Request, response: Response): Promise<Response> {

        const cod_usu  = request.cod_usu;

        if(!cod_usu) {
            return response.status(400).json({
                res: {
                    statusCode: 0,
                    message:  'Missing cod_usu param',
                    data: { }
                }
            });
        }

        try {
            const transations = await this.lisTransationsUseCase.execute(cod_usu);

            return response.status(200).json({
                res: {
                    statusCode: 200,
                    message: 'Success',
                    data: transations
                }
            });
        }
        catch(error) {
            return response.status(400).json({
                res: {
                    statusCode: error.message.split(':')[0].trim() || 6,
                    message:  error.message.split(':')[1].trim() || 'Unexpected Error',
                    data: { }
                }
            });
        }

    }
}