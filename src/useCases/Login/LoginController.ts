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
                    message: 'username and password must be provided',
                    data: {}
                }
            });
        }

        try {
            const userInfos = await this.loginUseCase.execute( { username, password } );

            return response.status(200).json({
                res: {
                    message: 'Successfully logged',
                    data: userInfos
                }
            });
        }
        catch(error) {
            return response.status(400).json({
                res: {
                    message:  error.message || 'Unexpected Error',
                    data: { }
                }
            });
        }
    }
}