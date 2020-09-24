import { PostgresTransationsRespository } from '@repositories/implementations/PostgresTransationsRespository';
import { SimulateNewTransationUseCase } from './SimulateNewTransationUseCase';
import { SimulateNewTransationController } from './SimulateNewTransationController';


const postgresTransationsRespository = new PostgresTransationsRespository();

const simulateNewTransationUseCase = new SimulateNewTransationUseCase(postgresTransationsRespository);

const simulateNewTransationController = new SimulateNewTransationController(simulateNewTransationUseCase);


export { simulateNewTransationController };