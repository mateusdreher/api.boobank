import { PostgresTransationsRespository } from '@repositories/implementations/PostgresTransationsRespository';
import { CalculateBalanceUseCase } from './CalculateBalanceUseCase';
import { CalculateBalanceController } from './CalculateBalanceController';

const postgresTransationsRespository = new PostgresTransationsRespository();

const calculateBalanceUseCase = new CalculateBalanceUseCase(postgresTransationsRespository);

const calculateBalanceController = new CalculateBalanceController(calculateBalanceUseCase);

export { calculateBalanceController };