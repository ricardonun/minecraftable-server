import { Repository, EntityRepository } from "typeorm";
import { FarmTable } from "../entities/FarmTable";

@EntityRepository(FarmTable)
class FarmTableRepository extends Repository<FarmTable> {}

export { FarmTableRepository };
