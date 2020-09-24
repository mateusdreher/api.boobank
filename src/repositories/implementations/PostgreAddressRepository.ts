import { Repository, getRepository } from 'typeorm';
import { IAddressRepository } from './../IAddressRepository';
import { Address } from '@entities/Address';

export class PostgreAddressRepository implements IAddressRepository {

    private repositoryORM: Repository<Address>;

    async getRepositoryORM(): Promise<void> {
        this.repositoryORM = getRepository(Address);
    }

    async findById(id: number): Promise<Address | undefined> {
        const address = this.repositoryORM.findOne({ where: { id } });

        return address;
    }
    async save(address: Address): Promise<void> {

        await this.repositoryORM.save(address);
    }
}