import { Address } from '@entities/Address';
import { ISaveAddressDTO } from './SaveAddressDTO';
import { IAddressRepository } from '@repositories/IAddressRepository';

export class SaveAddresUseCase {


    constructor(private addressRepository: IAddressRepository){
    }

    async execute(data: ISaveAddressDTO): Promise<void> {

        await this.addressRepository.getRepositoryORM();

        const address = new Address(data);

        if (!address.id) {
            throw new Error('Error : Error to save address');
        }

        const idAlreadyExists = await this.addressRepository.findById(address.id);

        if (idAlreadyExists) {
            throw new Error('Error : Id já existe');
        }

        this.addressRepository.save(address);
    }

}