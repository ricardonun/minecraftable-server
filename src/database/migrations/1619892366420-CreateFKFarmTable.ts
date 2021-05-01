import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKFarmTable1619892366420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "farmTable",
            new TableForeignKey({
                name:"FKFarmDrop",
                referencedTableName:"farmDrops",
                referencedColumnNames:["farm_id"],
                columnNames:["id"],
                //onDelete:"SET NULL",
               // onUpdate:"SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("farmTable", "FKFarmDrop")
    }

}
