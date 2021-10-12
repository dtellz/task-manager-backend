import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTask1634048136437 implements MigrationInterface {
    name = 'AddTask1634048136437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(64) NOT NULL, "status" integer NOT NULL DEFAULT '0', "priority" integer NOT NULL DEFAULT '0', "endTime" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
