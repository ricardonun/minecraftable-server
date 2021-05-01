import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("item")
class Item {
    @PrimaryColumn()
    id: string;

    @Column()
    item_name: string;

    @Column()
    item_img: string;

    @Column()
    how_much_to_block: number;

    @Column()
    how_much_to_nugget: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Item}