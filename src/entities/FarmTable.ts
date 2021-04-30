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
