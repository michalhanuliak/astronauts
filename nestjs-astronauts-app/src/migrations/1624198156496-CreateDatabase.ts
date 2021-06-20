import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1624198156496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('astronauts', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('astronauts', true);
  }
}
