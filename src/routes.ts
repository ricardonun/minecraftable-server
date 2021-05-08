import { Router } from "express";
import { FarmTableController } from "./controllers/FarmController";
import { FarmDropController } from "./controllers/FarmDropController";
import { ItemController } from "./controllers/ItemController";
import { UserController } from "./controllers/UserController";

/**Variaveis do sistema de rotas*/
const routes = Router();
const farmTableController = new FarmTableController();
const itemController = new ItemController();
const farmDropController = new FarmDropController();
const userController = new UserController();

/**Rotas */
routes.post("/farms", farmTableController.create);
routes.get("/farms/:id", farmTableController.listById);
routes.get("/farms", farmTableController.listAllFarm);
routes.get("/farms/drops/:id", farmTableController.listByDrop);

routes.post("/item", itemController.create);
routes.get("/item", itemController.listAllItens);
routes.get("/item/:id", itemController.listById);

routes.post("/drop", farmDropController.create);
routes.get("/drop", farmDropController.listAllDrops);
routes.get("/drop/:id", farmDropController.listById);
routes.get("/drop/item/:id", farmDropController.listByItem);
routes.get("/drop/farm/:id", farmDropController.listByFarm);

routes.post("/user", userController.create);
routes.get("/user", userController.authenticate);

export { routes };
