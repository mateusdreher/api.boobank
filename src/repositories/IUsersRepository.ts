import { User } from '@entities/User';

export interface IUsersRepository {
    getRepositoryORM(): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<User | undefined>;
    findByCpf(cpf: string):Promise<User | undefined>;
    register(user: User): Promise<string>;
}