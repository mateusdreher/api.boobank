import { uuid } from 'uuidv4';

export class User {
    public readonly cod_usu?: string;
    public username: string;
    public pass: string;
    public email: string;
    
    constructor(user: User) {
        this.username = user.username;
        this.email = user.email;
        this.pass = user.pass;

        if (!user.cod_usu) {
            this.cod_usu = uuid();
        }
        else {
            this.cod_usu = user.cod_usu;
        }
    }
}