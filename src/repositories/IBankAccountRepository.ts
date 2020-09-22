import { BankAccount } from '@entities/BankAccount';

export interface IBankAccountRepository {
    findByCodUsu(cod_usu: string): Promise<BankAccount>;
    findByAccountNumber(accountNumber: string): Promise<BankAccount>;
    create(account:BankAccount):Promise<BankAccount>;
}