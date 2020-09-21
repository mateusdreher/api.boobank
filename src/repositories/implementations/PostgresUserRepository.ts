import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';

export class PostgresUserRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = this.users.find(user => user.username === username);

        return user;
    }

    async register(user: User): Promise<string> {
        this.users.push(user);

        return user.cod_usu;
    }
}