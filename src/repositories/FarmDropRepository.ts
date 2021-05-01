import {EntityRepository,Repository} from "typeorm"
import { FarmDrop } from "../entities/FarmDrop";

@EntityRepository(FarmDrop)
class FarmDropRepository extends Repository<FarmDrop>{}

export {FarmDropRepository}