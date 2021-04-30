import { Router } from "express";
import { FarmTableController } from "./controllers/FarmController";

/**Variaveis do sistema de rotas*/
const routes = Router();
const farmTableController = new FarmTableController();

/**Rotas */
routes.post("/farms", farmTableController.create);
routes.get("/farms", farmTableController.listAllFarm);

export { routes };
