import { RegisterUserController } from './RegisterUserController';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { PostgresUserRepository } from '@repositories/implementations/PostgresUserRepository';

const postgresUserRepository = new PostgresUserRepository();

const registerUserUseCase = new RegisterUserUseCase(postgresUserRepository);

const registerUserController = new RegisterUserController(registerUserUseCase);

export { registerUserController };

