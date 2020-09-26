import { Request, Response } from 'express';
import { SimulateNewTransationUseCase } from './SimulateNewTransationUseCase';


export class SimulateNewTransationController {

    constructor(private simulateNewTransationUseCase: SimulateNewTransationUseCase) {
    }


    async handle(request: Request, response: Response): Promise<Response> {

        const transation = request.body;

        const bodyLength = Object.keys(transation).length;

        if (bodyLength < 4) {
            return response.status(400).json({
                res: {
                    statusCode: 0,
                    message: 'Verify your body',
                    data: { }
                }
            });
        }

        try {

            await this.simulateNewTransationUseCase.execute(transation); 

            return response.status(201).send({ 
                res: {
                    statusCode: 200,
                    message: 'Success : Successfully created transation',
                    data: {}
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
