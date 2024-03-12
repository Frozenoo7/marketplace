import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { CreateMarketplaceProfileDto } from "./dto/create-marketplace-profile.dto";
import { MarketplaceProfileService } from "./marketplace-profile.service";

@Controller("marketplace-profile")
export class MarketplaceProfileController {
  constructor(
    private readonly marketplaceProfileService: MarketplaceProfileService
  ) {}

  @Post()
  async createBusiness(@Body() createBusinessDto: CreateMarketplaceProfileDto) {
    return this.marketplaceProfileService.createMarketplaceProfile(
      createBusinessDto
    );
  }

  @Get()
  async findAllBusiness() {
    return this.marketplaceProfileService.findAllMarketplaceProfilees();
  }

  @Get(":id")
  async findBusinessById(@Param("id") id: string) {
    return this.marketplaceProfileService.findMarketplaceProfileById(id);
  }

  @Put(":id")
  async updateBusiness(
    @Param("id") id: string,
    @Body() updateBusinessDto: CreateMarketplaceProfileDto
  ) {
    return this.marketplaceProfileService.updateMarketplaceProfile(
      id,
      updateBusinessDto
    );
  }

  @Delete(":id")
  async deleteBusiness(@Param("id") id: string) {
    return this.marketplaceProfileService.deleteMarketplaceProfile(id);
  }
}
