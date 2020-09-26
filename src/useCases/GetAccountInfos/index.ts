import { PostgreAccountRepository } from '@repositories/implementations/PostgreAccountRepository';
import { GetAccountInfosUseCase } from './GetAccountInfosUseCase';
import { GetAccountInfosController } from './GetAccountInfosController';

const postgreAccountRepository = new PostgreAccountRepository();

const getAccountInfosUseCase = new GetAccountInfosUseCase(postgreAccountRepository);

const getAccountInfosController = new GetAccountInfosController(getAccountInfosUseCase);

export { getAccountInfosController };