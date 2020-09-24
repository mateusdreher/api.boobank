import { ITransationsRepository } from '@repositories/ITransationsRepository';
import { ISimulateNewTransationDTO } from './SimulateNewTransationDTO';
import { Transations } from '@entities/Transations';

export class SimulateNewTransationUseCase { 
    
    constructor (private transationRepository: ITransationsRepository){
    }

    async execute(data: ISimulateNewTransationDTO): Promise<void> {

        await this.transationRepository.getRepositoryORM();
        
        const transation = new Transations(data);

        await this.transationRepository.saveNewTransation(transation);
    }
}