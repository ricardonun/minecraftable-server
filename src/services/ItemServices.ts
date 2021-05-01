import e from "express";
import { getCustomRepository, Repository } from "typeorm";
import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

interface IitemServices {
  item_name: string;
  item_img: string;
  how_much_to_block?: number;
  how_much_to_nugget?: number;
}
class ItemServices {
  /**Importar metodos do banco */
  private itemServices: Repository<Item>;
  constructor() {
    this.itemServices = getCustomRepository(ItemRepository);
  }

  /**Metodos */
  async create({
    item_name,
    item_img,
    how_much_to_block,
    how_much_to_nugget,
  }: IitemServices) {
      const item = this.itemServices.create({
          item_name,
          item_img,
          how_much_to_block,
          how_much_to_nugget
      })

      await this.itemServices.save(item)
      return item
  }

  async listAllItens(){
      const itens = await this.itemServices.query("SELECT * FROM item")

      return itens
  }
}

export {ItemServices}