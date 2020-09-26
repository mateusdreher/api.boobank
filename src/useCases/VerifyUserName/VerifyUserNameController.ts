import { Request, Response } from 'express';
import { VerifyUserNameUseCase } from './VerifyUserNameUseCase';

export class VerifyUserNameController {

    constructor (private verifyUserNameUseCase: VerifyUserNameUseCase) {
    }


    async handle(request: Request, response: Response): Promise<Response> {

        const username = <string>request.query.username;

        if (!username) {
            return response.status(201).send({ 
                res: {
                    statuscode: 0,
                    message: 'Error : username not provided',
                    data: {}
                }
            });
        }

        try {
            const user = await this.verifyUserNameUseCase.execute(username); 
            
            return response.status(201).send({ 
                res: {
                    statusCode: 200,
                    message: 'OK : username available',
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