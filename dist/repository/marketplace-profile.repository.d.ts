import { EntityManager, Repository } from "typeorm";
import { MarketplaceProfileEntity } from "entities/index.entity";
export declare class MarketplaceProfileRepository extends Repository<MarketplaceProfileEntity> {
    private entityManager;
    constructor(entityManager: EntityManager);
}
