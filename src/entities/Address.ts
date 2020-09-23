import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('address')
export class Address {

    @PrimaryColumn()
    public id?: number;

    @Column()
    public cod_usu: string;

    @Column()
    public rua: string;

    @Column()
    public numero: string;

    @Column()
    public bairro: string;

    @Column()
    public cidade: string;

    @Column()
    public uf: string;

    @Column()
    public pais: string;

    @Column()
    public cep: string;


    constructor(address: Address) {

        if(address) {
            this.cod_usu = address.cod_usu;
            this.rua = address.rua;
            this.numero = address.numero;
            this.bairro = address.bairro;
            this.cidade = address.cidade;
            this.uf = address.uf;
            this.pais = address.pais;
            this.cep = address.cep;

            if (!address.id) {
                this.id = Math.floor(Math.random() * 10000);
            }
            else {
                this.id = address.id;
            }
        }
        
    }
}