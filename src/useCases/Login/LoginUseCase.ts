import { ILoginDTO } from './LoginDTO';
import { ILoginrepository } from '@repositories/ILoginRepository';
import * as bcrypt from 'bcrypt';
import { generateJWTToken } from '@services/generateToken';

export class LoginUseCase {

    private userInfos: Record<string, string> ;

    constructor(private loginRepository: ILoginrepository){
    }

    async execute (data: ILoginDTO): Promise<Record<string, string>> {

        await this.loginRepository.getRepositoryORM();

        const user = await this.loginRepository.validateUsername(data.username);

        if (!user) {
            throw new Error('Userr not exists');
        }

        const validPassword = await bcrypt.compare(data.password, user.password);

        if (!validPassword) {
            throw new Error('Invalid password');
        }

        this.userInfos = {
            cod_usu: user.cod_usu,
            token: generateJWTToken(user.cod_usu)
        };

        return this.userInfos;
        
    }
}