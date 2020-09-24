import { Address } from '@entities/Address';

export interface IAddressRepository {
    getRepositoryORM(): Promise<void>;
    findById(id: number): Promise<Address | undefined>;
    save(addres: Address): Promise<void>;
}