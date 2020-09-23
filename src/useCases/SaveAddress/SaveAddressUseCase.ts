import { Address } from '@entities/Address';
import { ISaveAddressDTO } from './SaveAddressDTO';
import { IAddressRepository } from '@repositories/IAddressRepository';
import { userInfo } from 'os';

export class SaveAddresUseCase {


    constructor(private addressRepository: IAddressRepository){
    }

    async execute(data: ISaveAddressDTO): Promise<void> {

        await this.addressRepository.getRepositoryORM();

        const address = new Address(data);

        const idAlreadyExists = await this.addressRepository.findById(address.id);

        if (idAlreadyExists) {
            throw new Error('Id já existe');
        }

        this.addressRepository.save(address);
    }

}