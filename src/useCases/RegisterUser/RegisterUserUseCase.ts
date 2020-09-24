import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IRegisterUserDTO } from './RegisterUserDTO';
import * as bcrypt from 'bcrypt';

export class RegisterUserUseCase {

    constructor (private userRepository: IUsersRepository) {
    }

    async execute(data: IRegisterUserDTO): Promise<string | undefined> {
        
        this.userRepository.getRepositoryORM();

        const emailAlreadyExists = await this.userRepository.findByEmail(data.email);  
        const usernameAlreadyExists = await this.userRepository.findByUsername(data.username);

        data.password = await bcrypt.hash(data.password, 10);

        if (usernameAlreadyExists) {
            throw new Error('Error: username already exists');
        }
        
        if (emailAlreadyExists) {
            throw new Error('Error : email already exists');
        }
        

        const user = new User(data);

        return await this.userRepository.register(user);
        
    }
}