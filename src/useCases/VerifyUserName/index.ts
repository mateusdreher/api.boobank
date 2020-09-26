import { PostgresUserRepository } from '@repositories/implementations/PostgresUserRepository';
import { VerifyUserNameUseCase } from './VerifyUserNameUseCase';
import { VerifyUserNameController } from './VerifyUserNameController';


const postgresUserRepository = new PostgresUserRepository();

const verifyUserNameUseCase = new VerifyUserNameUseCase(postgresUserRepository);

const verifyUserNameController = new VerifyUserNameController(verifyUserNameUseCase);

export { verifyUserNameController };