import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import {
  CategoryEntity,
  MarketplaceProfileEntity,
  ProductEntity,
} from "entities/index.entity";
import {
  CategoryRepository,
  MarketplaceProfileRepository,
  ProductRepository,
} from "./index";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      ProductEntity,
      MarketplaceProfileEntity,
    ]),
  ],
  providers: [
    CategoryRepository,
    ProductRepository,
    MarketplaceProfileRepository,
  ],
  exports: [
    CategoryRepository,
    ProductRepository,
    MarketplaceProfileRepository,
  ],
})
export class RepositoryModule {}
