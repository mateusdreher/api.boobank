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

        data.password = await bcrypt.hash(data.password, 10);
        
        if (emailAlreadyExists) {
            throw new Error('5 : email already exists');
        }
        

        const user = new User(data);

        return await this.userRepository.register(user);
        
    }
}