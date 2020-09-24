import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnDescriptionToTransationsTable1600909319731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('transations', new TableColumn({
            name: 'description',
            type: 'text'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('transations', 'description');
    }

}
