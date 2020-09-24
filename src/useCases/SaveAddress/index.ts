import { PostgreAddressRepository } from '@repositories/implementations/PostgreAddressRepository';
import { SaveAddressController } from './SaveAddressController';
import { SaveAddresUseCase } from './SaveAddressUseCase';

const postgreAddressRepository = new PostgreAddressRepository();

const saveAddresUseCase = new SaveAddresUseCase(postgreAddressRepository);

const saveAddressController = new SaveAddressController(saveAddresUseCase);

export { saveAddressController };