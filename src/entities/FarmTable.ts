import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("farmTable")
class FarmTable {
  @PrimaryColumn()
  id: string;
  @Column()
  nameFarm: string;
  @Column()
  description: string;
  @Column()
  drops: string;
  @Column()
  difficylty: string;
  @Column()
  ratting: string;
  @Column()
  avgBuildTime: number;
  @Column()
  crafting: string;
  @Column()
  version: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { FarmTable };
