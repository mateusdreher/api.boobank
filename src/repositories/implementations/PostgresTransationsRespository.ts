import { ITransationsRepository } from '@repositories/ITransationsRepository';
import { Transations } from '@entities/Transations';
import { getRepository, Repository } from 'typeorm';

export class PostgresTransationsRespository implements ITransationsRepository {
    
    private repositoryORM: Repository<Transations>;

    async getRepositoryORM(): Promise<void>{
        this.repositoryORM = getRepository(Transations);
    }

    async getTransations(cod_usu: string):Promise<Transations | undefined> {
        const transations = await this.repositoryORM.find({
            take: 10,  
            where: { cod_usu }  
        });

        return transations;
    }

    async saveNewTransation(transation: Transations): Promise<void> {
        await this.repositoryORM.save(transation);
    }
}