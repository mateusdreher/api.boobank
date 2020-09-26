import { Request, Response } from 'express';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {

    constructor (private loginUseCase: LoginUseCase) {
    }


    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;
        
        if (username === undefined || password === undefined) {
            return response.status(400).json({
                res: {
                    statusCode: 0,
                    message: 'Error: username and password must be provided',
                    data: {}
                }
            });
        }

        try {
            const userInfos = await this.loginUseCase.execute( { username, password } );

            return response.status(200).json({
                res: {
                    message: 'Success: Successfully logged',
                    data: userInfos
                }
            });
        }
        catch(error) {
            console.log(error);
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