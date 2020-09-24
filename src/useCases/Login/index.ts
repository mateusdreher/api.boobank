import { PostgresLoginRepository } from '@repositories/implementations/PostgresLoginRepository';
import { LoginUseCase } from './LoginUseCase';
import { LoginController } from './LoginController';


const postgresLoginRepository = new PostgresLoginRepository();

const loginUseCase = new LoginUseCase(postgresLoginRepository);

const loginController = new LoginController(loginUseCase);

export { loginController };