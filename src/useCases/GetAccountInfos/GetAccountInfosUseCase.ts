import { BankAccount } from '@entities/BankAccount';
import { IBankAccountRepository } from '@repositories/IBankAccountRepository';

export class GetAccountInfosUseCase {

    constructor(private bankaAccountRepository: IBankAccountRepository) {
    }

    async execute(cod_usu: string): Promise<BankAccount | undefined> {
        
        await this.bankaAccountRepository.getRepositoryORM();

        return await this.bankaAccountRepository.getAccountInfos(cod_usu);


    }
}