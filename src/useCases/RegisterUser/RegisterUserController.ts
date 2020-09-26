import { Request, Response } from 'express';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { createBankAccountUseCase } from '@useCases/CreateBankAcount';

export class RegisterUserController {

    constructor(private registerUserCase: RegisterUserUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {

        const user = request.body;
        
        const bodyLength = Object.keys(user).length;

        if (bodyLength < 7) {
            return response.status(400).json({
                res: {
                    statusCode: 0,
                    message: 'Error: Verify your body',
                    data: { }
                }
            });
        }

        try {
            const cod_usu = await this.registerUserCase.execute(user);

            const created_account = await createBankAccountUseCase.execute(cod_usu);

            return response.status(201).send({ 
                res: {
                    statuCode: 200,
                    message: 'Success : Conta criada com sucesso',
                    data: created_account
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