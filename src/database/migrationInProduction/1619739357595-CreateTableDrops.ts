import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableDrops1619739357595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farmDrops",
        columns: [
          {
            name: "id",
            type: "integer",
          },
          {
            name: "item_id",
            type: "integer",
          },
          {
            name: "quantity_min",
            type: "integer",
          },
          {
            name: "quantity_max",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "FKItem",
            referencedTableName: "item",
            referencedColumnNames: ["id"],
            columnNames: ["item_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
