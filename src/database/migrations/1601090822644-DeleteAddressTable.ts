import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class DeleteAddressTable1601090822644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'address'
        }));
    }

}
