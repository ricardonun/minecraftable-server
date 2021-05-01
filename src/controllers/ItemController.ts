import { Request, Response } from "express";
import { ItemServices } from "../services/ItemServices";

class ItemController {
  async create(req: Request, res: Response) {
    const {
      item_name,
      item_img,
      how_much_to_block,
      how_much_to_nugget,
    } = req.body;
    const itemServices = new ItemServices();

    const item = await itemServices.create({
      item_name,
      item_img,
      how_much_to_block,
      how_much_to_nugget,
    });

    return res.json(item);
  }

  async listAllItens(req: Request, res: Response){
      const itemServices = new ItemServices()
      const itens = await itemServices.listAllItens()

      return res.json(itens)
  }
}

export { ItemController };
