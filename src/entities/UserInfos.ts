import { uuid } from 'uuidv4';

export class UserInfos {
    public readonly id?: string;
    public cod_usu: string;
    public first_name: string;
    public last_name: string;
    public cpf: string;
    public rg: string;
    public rua: string;
    public numero: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public pais: string;
    public cep: string;

    constructor(userInfos: UserInfos) {
        this.cod_usu = userInfos.cod_usu;
        this.first_name = userInfos.first_name;
        this.last_name = userInfos.last_name;
        this.cpf = userInfos.cpf;
        this.rg = userInfos.rg;
        this.rua = userInfos.rua;
        this.numero = userInfos.numero;
        this.bairro = userInfos.bairro;
        this.cidade = userInfos.cidade;
        this.estado = userInfos.estado;
        this.pais = userInfos.pais;
        this.cep = userInfos.cep;

        if (!userInfos.id) {
            this.id = uuid();
        }
        else {
            this.id = userInfos.id;
        }
    }
}