import { IUsersRepository } from '@repositories/IUsersRepository';

export class VerifyUserNameUseCase {

    constructor(private userRepository: IUsersRepository) {
    }

    async execute(username: string): Promise<string | undefined> {

        await this.userRepository.getRepositoryORM();
    
        const usernameExists = await this.userRepository.findByUsername(username);

        if (usernameExists) {
            throw new Error('Error: username already exists');
        }
        
        return usernameExists;

    }
}