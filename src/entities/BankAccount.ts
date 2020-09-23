import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('bank-account')
export class BankAccount {
    
    @PrimaryColumn()
    public readonly cod_account?: string;
    
    @Column()
    public cod_usu: string;

    @Column()
    public agency: string;

    @Column()
    public account_number: string;

    @Column()
    public verify_digit: number;

    constructor(accountInfos: BankAccount) {

        if (accountInfos) {
            this.cod_usu = accountInfos.cod_usu;
            this.agency = accountInfos.agency;
            this.account_number = accountInfos.account_number;
            this.verify_digit = accountInfos.verify_digit;

            if (!accountInfos.cod_account) {
                this.cod_account = uuid();
            }
            else {
                this.cod_account = accountInfos.cod_account;
            }

        }
        
    }
}