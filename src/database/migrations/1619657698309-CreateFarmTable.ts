import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFarmTable1619657698309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farmTable",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nameFarm",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "drops",
            type: "array",
          },
          {
            name: "difficulty",
            type: "varchar",
          },
          {
            name: "ratting",
            type: "varchar",
          },
          {
            name: "avgBuildTime",
            type: "number",
          },
          {
            name: "crafting",
            type: "array",
          },
          {
            name: "version",
            type: "varchar",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "createAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("settings");
  }
}
