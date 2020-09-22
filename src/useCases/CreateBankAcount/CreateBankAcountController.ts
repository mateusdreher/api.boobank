import { CreateBankAccountUseCase } from './CreateBankAcountUseCase';
import { BankAccount } from '@entities/BankAccount';

export class CreateBankAcountController {

    constructor(private createBankAccountUseCase: CreateBankAccountUseCase){
    }

    async handle(cod_usu: string): Promise<BankAccount> {
        return await this.createBankAccountUseCase.execute(cod_usu);    
    }
}