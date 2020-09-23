import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AlterTableAddress1600832127776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('address','id', new TableColumn({
            name: 'id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('address', 'id', new TableColumn({
            name: 'id',
            type: 'text',
            isPrimary: true
        }));
    }

}
