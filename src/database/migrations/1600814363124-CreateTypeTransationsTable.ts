import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTypeTransationsTable1600814363124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'type-transations',
            columns: [
                {
                    name: 'cod_type',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'type_description',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('type-transations');
    }

}
