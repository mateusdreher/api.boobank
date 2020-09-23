import { Request, Response } from 'express';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { createBankAccountUseCase } from '@useCases/CreateBankAcount';
import { IRegisterUserDTO } from './RegisterUserDTO';

export class RegisterUserController {

    private user: IRegisterUserDTO;

    constructor(private registerUserCase: RegisterUserUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {

        this.user = request.body;
        
        if (Object.keys(this.user).length === 0) {
            return response.status(400).json({
                res: {
                    message: 'Body cannot be empty',
                    data: { }
                }
            });
        }

        try {
            const cod_usu = await this.registerUserCase.execute(this.user);

            const created_account = await createBankAccountUseCase.execute(cod_usu);

            return response.status(201).send({ 
                res: {
                    message: 'Conta criada com sucesso',
                    data: created_account
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