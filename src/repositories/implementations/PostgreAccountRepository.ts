import { IBankAccountRepository } from '@repositories/IBankAccountRepository';
import { BankAccount } from '@entities/BankAccount';
import { getRepository, Repository } from 'typeorm';

export class PostgreAccountRepository implements IBankAccountRepository {
    private repositoryORM: Repository<BankAccount>;

    async getRepositoryORM(): Promise<void> {
        this.repositoryORM = getRepository(BankAccount);
    }

    async findByAccountNumber(account_number: string): Promise<BankAccount | undefined> {

        const account = await this.repositoryORM.findOne({ where: { account_number } });
        
        return account;
    }

    async findByCodUsu(cod_usu: string):Promise<BankAccount | undefined> {

        const account = await this.repositoryORM.findOne({ where: { cod_usu } });
        
        return account;

    }

    async create(account: BankAccount): Promise<BankAccount> {
        
        await this.repositoryORM.save(account);

        return account;
    }

    async getAccountInfos(cod_usu: string): Promise<BankAccount | undefined> {

        const account = await this.repositoryORM.findOne( { where: { cod_usu } } );
        
        return account;
    }
    
}