import { BankAccount } from '@entities/BankAccount';
import { IBankAccountRepository } from '@repositories/IBankAccountRepository';
import { ICreateBankAcountDTO } from './ICreateBankAcountDTO';
import { generateAccountNumber } from '@services/genrateAccountBank';


export class CreateBankAccountUseCase {

    private account: ICreateBankAcountDTO;

    constructor (private bankAccountRepository: IBankAccountRepository){
        this.account = {
            cod_usu: '',
            account_number: '',
            agency: '0001',
            verify_digit: 0
        };
    }

    async execute(cod_usu: string):Promise<BankAccount> {

        this.account.cod_usu = cod_usu;
        this.account.account_number = generateAccountNumber();
    
        const userAlreadyHaveAccount = this.bankAccountRepository.findByCodUsu(this.account.cod_usu);
        const accountNumberAlreadyExists = this.bankAccountRepository.findByAccountNumber(this.account.account_number);

        // if (userAlreadyHaveAccount) {
        //     throw new Error('Usuário já possui conta');
        // }
        // if (accountNumberAlreadyExists && accountNumberAlreadyExists != undefined) {
        //     throw new Error('Número de conta já existe');
        // }


        return await this.bankAccountRepository.create(this.account);

    }

}