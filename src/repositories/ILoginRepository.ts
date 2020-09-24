import { User } from '@entities/User';

export interface ILoginrepository {
    getRepositoryORM(): Promise<void>;
    validateUsername(username: string): Promise<User | undefined>;
}