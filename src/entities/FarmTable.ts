import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  ManyToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { FarmDrop } from "./FarmDrop";

@Entity("farmTable")
class FarmTable {

  @JoinColumn({name:"id"})
  @OneToMany(() => FarmDrop, farmDrop => farmDrop.farmTable)
  farmDrop: FarmDrop[]

  @PrimaryColumn()
  id: string;

  @Column()
  name_farm: string;

  @Column()
  description: string;

  @Column()
  difficulty: number;

  @Column()
  rating: string;

  @Column()
  avg_build_time: number;

  @Column()
  version_min: string;

  @Column()
  version_max: string;

  @Column()
  url_thumbnail: string;

  @Column()
  url_video: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { FarmTable };
