import { Request, Response } from "express";
import { FarmDropService } from "../services/FarmDropServices";

class FarmDropController {
  async create(req: Request, res: Response) {
    const { item_id,farm_id,quantity_min, quantity_max } = req.body;
    const farmDropService = new FarmDropService()

    const drop = await farmDropService.create({item_id,farm_id,quantity_min,quantity_max})

    return res.json(drop)

  }

  async listAllDrops(req: Request, res: Response){
    const farmDropService = new FarmDropService()
    const list = await farmDropService.listAllDrops()

    return res.json(list)
  }

  async listById(req: Request, res: Response){
    const farmDropService = new FarmDropService()
    const {id} = req.params
    const drop = await farmDropService.listById({id})

    return res.json(drop)
  }

  async listByItem(req: Request, res: Response){
    const farmDropService = new FarmDropService()
    const {id} = req.params

    const drop = await farmDropService.listByItem(id)

    return res.json(drop)
  }

  async listByFarm(req:Request,res:Response){
    const farmDropService = new FarmDropService()
    const {id} = req.params

    const drop = await farmDropService.listByFarm(id)

    return res.json(drop)
  }
}

export { FarmDropController };
