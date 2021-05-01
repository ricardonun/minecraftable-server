import { FarmTableRepository } from "../repositories/FarmTableRepository";
import { getCustomRepository, Repository } from "typeorm";
import { FarmTable } from "../entities/FarmTable";

interface IFarmTableCreate {
  name_farm: string;
  description: string;
  difficulty: number;
  rating: string;
  avg_build_time: number;
  version_min: string;
  version_max: string;
  url_thumbnail: string;
  url_video: string;
}

class FarmTableService {
  /**Importar os metodos do banco */
  private farmTableRepository: Repository<FarmTable>;
  constructor() {
    this.farmTableRepository = getCustomRepository(FarmTableRepository);
  }
/**Metodos */
  async create({
    name_farm,
    description,
    difficulty,
    rating,
    avg_build_time,
    version_max,
    version_min,
    url_thumbnail,
    url_video,
  }: IFarmTableCreate) {
    const farmtable = this.farmTableRepository.create({
      name_farm,
      description,
      difficulty,
      rating,
      avg_build_time,
      version_max,
      version_min,
      url_thumbnail,
      url_video,
    });

    await this.farmTableRepository.save(farmtable);
    return farmtable;
  }

  async listAllFarms() {
    const farmsList = await this.farmTableRepository.query(
      `SELECT * FROM farmTable`
    );
    return farmsList;
  }

  async listById({id}){
    
    const farm = await this.farmTableRepository.findByIds(id)

    return farm
  }

  async listByDrop({id}){
    const farmDrop = await this.farmTableRepository.findByIds(id,{relations:["farmDrop"]})
    console.log(farmDrop)
    return farmDrop
  }
}

export { FarmTableService };
