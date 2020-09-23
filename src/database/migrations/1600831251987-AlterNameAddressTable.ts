import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterNameAddressTable1600831251987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable('endereco', 'address');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable('address', 'endereco');
    }

}
