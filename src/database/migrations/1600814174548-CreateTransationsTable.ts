import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransationsTable1600814174548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transations',
            columns: [
                {
                    name: 'id',
                    type: 'text',
                    isPrimary: true
                },
                {
                    name: 'cod_account',
                    type: 'text'
                },
                {
                    name: 'type',
                    type: 'int'
                },
                {
                    name: 'value',
                    type: 'text'
                },
                {
                    name: 'destiny',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transations');
    }

}
