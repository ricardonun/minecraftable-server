import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFarmTable1619657698309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farmTable",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name_farm",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "difficulty",
            type: "integer",
          },
          {
            name: "rating",
            type: "decimal",
          },
          {
            name: "avg_build_time",
            type: "integer",
          },
          {
            name: "version_min",
            type: "varchar",
          },
          {
            name: "version_max",
            type: "varchar",
          },
          {
            name: "url_thumbnail",
            type: "varchar",
          },
          {
            name: "url_video",
            type: "varchar",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("farmTable");
  }
}
