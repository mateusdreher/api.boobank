import { PostgresTransationsRespository } from '@repositories/implementations/PostgresTransationsRespository';
import { ListTransationsConttroller } from './ListTransationsController';
import { ListTransationsUseCase } from './ListTransationsUseCase';

const postgresTransationsRespository = new PostgresTransationsRespository();

const listTransationsUseCase = new ListTransationsUseCase(postgresTransationsRespository);

const listTransationsConttroller = new ListTransationsConttroller(listTransationsUseCase);

export { listTransationsConttroller };