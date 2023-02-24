import { MigrationInterface, QueryRunner } from "typeorm";

export class AjustName1677243977155 implements MigrationInterface {
    name = 'AjustName1677243977155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_cee7125f3cbad047d34a6e13539" UNIQUE ("name"), CONSTRAINT "CHK_f0fc1f3afdfbbd5c8ac58cc339" CHECK ("price" > 0), CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
