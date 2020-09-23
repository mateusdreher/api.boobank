import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1600811925936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'cod_usu',
                    type: 'text',
                    isPrimary: true
                },
                {
                    name: 'username',
                    type: 'text',
                    isUnique: true,
                },
                {
                    name: 'email',
                    type: 'text',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'text',
                },
                {
                    name: 'first_name',
                    type: 'text',
                },
                {
                    name: 'last_name',
                    type: 'text',
                },
                {
                    name: 'cpf',
                    type: 'text',
                },
                {
                    name: 'rg',
                    type: 'text',
                }
                
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
