import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IRegisterUserDTO } from './RegisterUserDTO';
import * as bcrypt from 'bcrypt';

export class RegisterUserUseCase {

    constructor (private userRepository: IUsersRepository) {
    }

    async execute(data: IRegisterUserDTO): Promise<string> {
        
        const emailAlreadyExists = await this.userRepository.findByEmail(data.email);  
        const usernameAlreadyExists = await this.userRepository.findByUsername(data.username);
        data.pass = await bcrypt.hash(data.pass, 10);

        if (emailAlreadyExists) {
            throw new Error('email already exists');
        }
        if (usernameAlreadyExists) {
            throw new Error('username already exists');
        }

        const user = new User(data);

        return await this.userRepository.register(user);
        
    }
}