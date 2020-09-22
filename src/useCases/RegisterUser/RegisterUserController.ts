import { Request, Response } from 'express';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { User } from '@entities/User';
import { createBankAccountUseCase } from '@useCases/CreateBankAcount';

export class RegisterUserController {

    private user: User;

    constructor(private registerUserCase: RegisterUserUseCase) {
    }

    async handle(request: Request, response: Response): Promise<Response> {

        this.user = request.body;
        // const { username, pass, email, first_name, last_name, cpf, rg, rua, numero, bairro, cidade, uf, pais } = request.body;

        if (this.user.username === undefined || this.user.pass === undefined || this.user.email === undefined) {
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

            return response.status(201).send({ // Aqui eu chamo o create account
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
                    data: error
                }
            });
        }
    }
}