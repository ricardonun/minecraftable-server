import { Request, Response } from "express";
import { FarmTableService } from "../services/FarmTableServices";

class FarmTableController {
  async create(req: Request, res: Response) {
    const {
      name_farm,
      description,
      difficulty,
      rating,
      avg_build_time,
      version_max,
      version_min,
      url_thumbnail,
      url_video,
    } = req.body;
    const farmTableService = new FarmTableService();

    const farm = await farmTableService.create({
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

    return res.json(farm);
  }

  async listAllFarm(req: Request, res: Response) {
    const farmTableService = new FarmTableService();
    const farmdata = await farmTableService.listAllFarms();

    return res.json(farmdata);
  }

  async listById(req: Request, res: Response) {
    const { id } = req.params;
    const farmTableService = new FarmTableService();

    const farm = await farmTableService.listById({ id });

    return res.json(farm);
  }
}

export { FarmTableController };
