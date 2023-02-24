import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1677091145883 implements MigrationInterface {
    name = 'InitialMigration1677091145883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies_sp5" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_753f426113a9f1dba94351a7af5" UNIQUE ("name"), CONSTRAINT "PK_1b8e379f1c94bee86a5d2805da3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies_sp5"`);
    }

}
