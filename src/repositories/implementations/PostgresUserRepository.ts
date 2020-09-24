import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';

export class PostgresUserRepository implements IUsersRepository {
    private repositoryORM: Repository<User>;

    async getRepositoryORM(): Promise<void> {
        this.repositoryORM = getRepository(User);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repositoryORM.findOne({where: { email } });

        return user;
    }

    async findByUsername(username: string): Promise<User | undefined> {
        const user =  await this.repositoryORM.findOne({where: { username } });

        return user;
    }

    async findByCpf(cpf: string): Promise<User | undefined> {
        const user = await this.repositoryORM.findOne({ where: { cpf } });

        return user;
    }

    async register(user: User): Promise<string | undefined> {
        await this.repositoryORM.save(user);

        return user.cod_usu;
    }
}