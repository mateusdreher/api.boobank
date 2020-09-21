import { uuid } from 'uuidv4';

export class AccountInfos {
    public readonly cod_account?: string;
    public cod_usu: string;
    public agency: number;
    public account_number: number;
    public verify_digit: number;

    constructor(accountInfos: AccountInfos) {
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