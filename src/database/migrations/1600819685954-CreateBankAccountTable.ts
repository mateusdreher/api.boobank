import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBankAccountTable1600819685954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bank-account',
            columns: [
                {
                    name: 'cod_account',
                    type: 'text',
                    isPrimary: true
                },
                {
                    name: 'cod_usu',
                    type: 'text'
                },
                {
                    name: 'agency',
                    type: 'text'
                },
                {
                    name: 'account_number',
                    type: 'text'
                },
                {
                    name: 'verify_digit',
                    type: 'int'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bank-account');
    }

}
