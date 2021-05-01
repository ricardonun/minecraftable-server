import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableItem1619875289530 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "item",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "item_name",
            type: "varchar",
          },
          {
            name: "item_img",
            type: "varchar",
          },
          {
            name: "how_much_to_block",
            type: "integer",
            isNullable: true,
          },
          {
            name: "how_much_to_nugget",
            type: "integer",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("item")
  }
}
