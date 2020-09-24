import { MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AlterTableTransations1600924741815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('transations','value', new TableColumn({
            name: 'value',
            type: 'float'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('transations','value', new TableColumn({
            name: 'value',
            type: 'text'
        }));
    }

}
