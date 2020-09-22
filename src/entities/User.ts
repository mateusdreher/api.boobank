import { uuid } from 'uuidv4';

export class User {
    public readonly cod_usu?: string;
    public username: string;
    public pass: string;
    public email: string;
    public first_name: string;
    public last_name: string;
    public cpf: string;
    public rg: string;
    public rua: string;
    public numero: string;
    public bairro: string;
    public cidade: string;
    public uf: string;
    public pais: string;
    public cep: string;
    
    constructor(user: User) {
        this.username = user.username;
        this.email = user.email;
        this.pass = user.pass;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.cpf = user.cpf;
        this.rg = user.rg;
        this.rua = user.rua;
        this.numero = user.numero;
        this.bairro = user.bairro;
        this.cidade = user.cidade;
        this.uf = user.uf;
        this.pais = user.pais;
        this.cep = user.cep;

        if (!user.cod_usu) {
            this.cod_usu = uuid();
        }
        else {
            this.cod_usu = user.cod_usu;
        }
    }
}