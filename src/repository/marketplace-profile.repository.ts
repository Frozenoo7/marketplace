import { Injectable } from "@nestjs/common";
import { EntityManager, Repository } from "typeorm";

import { MarketplaceProfileEntity } from "entities/index.entity";

@Injectable()
export class MarketplaceProfileRepository extends Repository<MarketplaceProfileEntity> {
  constructor(private entityManager: EntityManager) {
    super(MarketplaceProfileEntity, entityManager);
  }
}
