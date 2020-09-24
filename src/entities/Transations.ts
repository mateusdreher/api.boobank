import { Entity, Column, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('transations')
export class Transations {

    @PrimaryColumn()
    public readonly id?: string;

    @Column()
    public cod_usu?: string;

    @Column()
    public type: number;

    @Column()
    public value: number;

    @Column()
    public destiny: string;

    @Column()
    public description: string;

    constructor (transation: Transations) {

        if (transation) {
            this.cod_usu = transation.cod_usu;
            this.type = transation.type;
            this.value = transation.value;
            this.destiny = transation.destiny;
            this.description = transation.description;

            if(!transation.id) {
                this.id = uuid();
            }
            else {
                this.id = transation.id;
            }

            if (!transation.cod_usu) {
                this.cod_usu = '7fcd0e04-63a6-4488-9a89-551fdea6755c';
            }
            else {
                this.cod_usu = transation.cod_usu;
            }
        }
        
    }
}