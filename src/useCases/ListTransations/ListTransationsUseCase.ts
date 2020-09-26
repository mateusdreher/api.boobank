import { IListTransationsDTO } from './ListTransationsDTO';
import { ITransationsRepository } from '@repositories/ITransationsRepository';

export class ListTransationsUseCase {


    constructor(private transationsRepository: ITransationsRepository) {
    }


    async execute(cod_usu: string): Promise<IListTransationsDTO[] | undefined> {

        this.transationsRepository.getRepositoryORM();

        const transations = await this.transationsRepository.getTransations(cod_usu);

        return transations;
    }   
}