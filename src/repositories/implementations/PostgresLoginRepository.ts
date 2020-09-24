import { exit } from 'process';
import { User } from '@entities/User';
import { ILoginrepository } from '@repositories/ILoginRepository';
import { getRepository, Repository } from 'typeorm';

export class PostgresLoginRepository implements ILoginrepository {

    private repositoryORM: Repository<User>;

    async getRepositoryORM(): Promise<void> {
        this.repositoryORM = getRepository(User);
    }

    async validateUsername(username: string): Promise<User | undefined> {
        const user = await this.repositoryORM.findOne({ where: { username } });

        return user;
    }
}