import { Module } from "@nestjs/common";

import { MarketplaceProfileRepository } from "repository/index";

import { MarketplaceProfileService } from "./marketplace-profile.service";
import { MarketplaceProfileController } from "./marketplace-profile.controller";

@Module({
  imports: [],
  controllers: [MarketplaceProfileController],
  providers: [MarketplaceProfileService, MarketplaceProfileRepository],
})
export class BusinessModule {}
