import { uuid } from 'uuidv4';

export class Transations {
    public readonly id?: string;
    public cod_transation: number;
    public name_transation: string;

    constructor (transation: Transations) {
        this.cod_transation = transation.cod_transation;
        this.name_transation = transation.name_transation;

        if(!transation.id) {
            this.id = uuid();
        }
        else {
            this.id = transation.id;
        }
    }
}