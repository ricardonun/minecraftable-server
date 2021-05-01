import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableDrops1619739357595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "farmDrops",
        columns: [
          {
            name: "id",
            type: "varchar",
          },
          {
            name: "item_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "farm_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "quantity_min",
            type: "integer",
          },
          {
            name: "quantity_max",
            type: "integer",
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
        foreignKeys: [
          {
            name: "FKItem",
            referencedTableName: "item",
            referencedColumnNames: ["id"],
            columnNames: ["item_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },{
            name: "FKFarm",
            referencedTableName:"farmTable",
            referencedColumnNames:["id"],
            columnNames:["farm_id"],
            onDelete:"SET NULL",
            onUpdate:"SET NULL"
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("farmDrops");
  }
}
