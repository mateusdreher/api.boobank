export interface ICreateBankAcountDTO {
    cod_usu: string;
    agency: string; 
    account_number: string;
    verify_digit: number;
}