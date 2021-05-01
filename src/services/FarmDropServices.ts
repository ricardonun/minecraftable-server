import { getCustomRepository, Repository } from "typeorm";
import { FarmDrop } from "../entities/FarmDrop";
import { Item } from "../entities/Item";
import { FarmDropRepository } from "../repositories/FarmDropRepository";

interface IfarmDrop {
  item_id: string;
  farm_id: string;
  quantity_min: number;
  quantity_max: number;
}
class FarmDropService {
  /**Improtar os Metodos do banco */
  private farmDropRepository: Repository<FarmDrop>;
  constructor() {
    this.farmDropRepository = getCustomRepository(FarmDropRepository);
  }

  /**Metodos */
  async create({ item_id, farm_id, quantity_max, quantity_min }: IfarmDrop) {
    const dropfarm = this.farmDropRepository.create({
      item_id,
      farm_id,
      quantity_min,
      quantity_max,
    });

    await this.farmDropRepository.save(dropfarm);

    return dropfarm;
  }

  async listAllDrops() {
    const drops = await this.farmDropRepository.query(
      "SELECT * FROM farmDrops"
    );

    return drops;
  }

  async listById({ id }) {
    const drop = await this.farmDropRepository.find({ id });

    return drop;
  }

  async listByItem(item_id: string) {
    const drop = await this.farmDropRepository.find({
      where: { item_id },
      relations: ["item"],
    });

    return drop;
  }

  async listByFarm(farm_id: string) {
    const drop = await this.farmDropRepository.find({
      where: { farm_id },
      relations: ["item","farmTable"],
    });

    return drop;
  }
}

export { FarmDropService };
