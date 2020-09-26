import { Request, Response } from 'express';
import { CalculateBalanceUseCase } from './CalculateBalanceUseCase';

export class CalculateBalanceController {

    constructor(private calculateBalanceUseCase: CalculateBalanceUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const cod_usu  = request.cod_usu;

        try {
            const balance = await this.calculateBalanceUseCase.execute(cod_usu);

            return response.status(200).json({
                res: {
                    statusCode: 200,
                    message: 'Success',
                    data: balance
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