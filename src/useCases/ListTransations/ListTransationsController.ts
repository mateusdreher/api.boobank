import { Request, Response } from 'express';
import { ListTransationsUseCase } from './ListTransationsUseCase';

export class ListTransationsConttroller {

    constructor(private lisTransationsUseCase: ListTransationsUseCase){
    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { cod_usu } = request.query;

        if(!cod_usu) {
            return response.status(400).json({
                res: {
                    message:  'Missing cod_usu param',
                    data: { }
                }
            });
        }

        const transations = await this.lisTransationsUseCase.execute(cod_usu);

        return response.status(200).json({
            res: {
                message: 'Successfully',
                data: transations
            }
        });

    }
}