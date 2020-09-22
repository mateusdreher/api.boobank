import { IBankAccountRepository } from '@repositories/IBankAccountRepository';
import { BankAccount } from '@entities/BankAccount';

export class PostgreAccountRepository implements IBankAccountRepository {
    private accounts: BankAccount[] = [];

    async findByAccountNumber(account_number: string): Promise<BankAccount> {

        const ac_number = this.accounts.find(account => account.account_number === account_number);
        console.log(ac_number);
        return ac_number;
    }

    async findByCodUsu(cod_usu: string):Promise<BankAccount> {

        return this.accounts.find(account => account.cod_usu === cod_usu);

    }

    async create(account: BankAccount): Promise<BankAccount> {
        this.accounts.push(account);

        return account;
    }
    
}