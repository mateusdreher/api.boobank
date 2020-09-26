import { Transations } from '@entities/Transations';

export interface ITransationsRepository {
    getRepositoryORM(): Promise<void>;
    getTransations(cod_usu: string): Promise<Transations[] | undefined>;
    saveNewTransation(transation: Transations): Promise<void>;
}