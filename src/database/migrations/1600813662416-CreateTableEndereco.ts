import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateTableEndereco1600813662416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'endereco',
            columns: [
                {
                    name: 'id',
                    type: 'text',
                    isPrimary: true
                },
                {
                    name: 'cod_usu',
                    type: 'text'
                },
                {
                    name: 'rua',
                    type: 'text'
                },
                {
                    name: 'numero',
                    type: 'text'
                },
                {
                    name: 'bairro',
                    type: 'text'
                },
                {
                    name: 'cidade',
                    type: 'text'
                },
                {
                    name: 'uf',
                    type: 'text'
                },
                {
                    name: 'pais',
                    type: 'text'
                },
                {
                    name: 'cep',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereco');
    }

}
