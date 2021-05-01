import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { FarmTable } from "./FarmTable";
import { Item } from "./Item";

@Entity("farmDrops")
class FarmDrop {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: "item_id" })
  @ManyToOne(() => Item)
  item: Item;

  @Column()
  item_id: string

  @JoinColumn({ name: "farm_id" })
  @ManyToOne(() => FarmTable)
  farmTable: FarmTable;

  @Column()
  farm_id: string
  
  @Column()
  quantity_min: number;

  @Column()
  quantity_max: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
      if(!this.id){
          this.id = uuid()
      }
  }
}

export { FarmDrop };
