import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn()
    public readonly cod_usu?: string;

    @Column()
    public username: string;

    @Column()
    public password: string;

    @Column()
    public email: string;

    @Column()
    public first_name: string;

    @Column()
    public last_name: string;

    @Column()
    public cpf: string;

    @Column()
    public rg: string;
    
    constructor(user: User) {

        if(user) {
            this.username = user.username;
            this.email = user.email;
            this.password = user.password;
            this.first_name = user.first_name;
            this.last_name = user.last_name;
            this.cpf = user.cpf;
            this.rg = user.rg;
    
            if (!user.cod_usu) {
                this.cod_usu = uuid();
            }
            else {
                this.cod_usu = user.cod_usu;
            }
        }
    }
}