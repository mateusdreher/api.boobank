import { ITransationsRepository } from '@repositories/ITransationsRepository';
import { IBalanceDTO } from './CalculateBalanceDTO';

export class CalculateBalanceUseCase {
    
    constructor (private transationRepository: ITransationsRepository) {
    }

    async execute(cod_usu: string): Promise<IBalanceDTO> {

        const balance: IBalanceDTO = {
            earning: 0,
            spending: 0,
            balance: 0
        };

        await this.transationRepository.getRepositoryORM();

        const transations = await this.transationRepository.getTransations(cod_usu);

        if (!transations) {
            throw new Error('8 : Não existem transações para o usuário');
        }

        Object.keys(transations).forEach((index: any) => {
            const item = transations[index];

            if (item.type === 0) {
                balance.earning = balance.earning + item.value;
            }
            else if (item.type === 1) {
                balance.spending = balance.spending + item.value;
            }
        });

        balance.balance = balance.earning - balance.spending;

        return balance;

    }
}