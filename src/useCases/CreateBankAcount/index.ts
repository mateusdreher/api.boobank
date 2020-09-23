import { PostgreAccountRepository } from '@repositories/implementations/PostgreAccountRepository';
import { CreateBankAccountUseCase } from './CreateBankAcountUseCase';


const postgreAccountRepository = new PostgreAccountRepository();

const createBankAccountUseCase = new CreateBankAccountUseCase(postgreAccountRepository);

export { createBankAccountUseCase };