import { Request, Response } from 'express';
import { RegisterUserUseCase } from './RegisterUserUseCase';

export class RegisterUserController {

    constructor(private registerUserCase: RegisterUserUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { username, pass, email } = request.body;

        if (username === undefined || pass === undefined || email === undefined) {
            return response.status(400).json({
                res: {
                    message: 'Body cannot be empty',
                    data: { }
                }
            });
        }

        try {
            const ret = await this.registerUserCase.execute({username, pass, email});

            return response.status(201).send({
                res: {
                    message: 'Usuário criado com sucesso',
                    data: {
                        cod_usu: ret 
                    }
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