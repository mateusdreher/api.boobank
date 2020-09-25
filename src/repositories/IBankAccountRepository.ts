import { BankAccount } from '@entities/BankAccount';

export interface IBankAccountRepository {
    getRepositoryORM(): Promise<void>;
    findByCodUsu(cod_usu: string): Promise<BankAccount | undefined>;
    findByAccountNumber(accountNumber: string): Promise<BankAccount | undefined>;
    create(account:BankAccount):Promise<BankAccount>;
    getAccountInfos(cod_usu: string): Promise<BankAccount | undefined>;
}