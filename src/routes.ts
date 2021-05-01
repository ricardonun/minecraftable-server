import { Router } from "express";
import { FarmTableController } from "./controllers/FarmController";
import { ItemController } from "./controllers/ItemController";

/**Variaveis do sistema de rotas*/
const routes = Router();
const farmTableController = new FarmTableController();
const itemController = new ItemController();

/**Rotas */
routes.post("/farms", farmTableController.create);
routes.get("/farms/:id", farmTableController.listById);
routes.get("/farms", farmTableController.listAllFarm);

routes.post("/item", itemController.create)
routes.get("/item", itemController.listAllItens)
routes.get("/item/:id", itemController.listById)
export { routes };
