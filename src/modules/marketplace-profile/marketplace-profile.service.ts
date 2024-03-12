import { Injectable } from "@nestjs/common";
import { Point } from "geojson";

import { MarketplaceProfileRepository } from "repository/index";
import { CreateMarketplaceProfileDto } from "./dto/index";
import { IMarketplaceProfileResponse } from "./response/index";
import { ISuccessReponse } from "common/responses/index";
import { MarketplaceProfileEntity } from "entities/index.entity";

@Injectable()
export class MarketplaceProfileService {
  constructor(
    private readonly MarketplaceProfileRepository: MarketplaceProfileRepository
  ) {}

  async createMarketplaceProfile(
    createMarketplaceProfileDto: CreateMarketplaceProfileDto
  ): Promise<ISuccessReponse> {
    const { latitude, longitude } = createMarketplaceProfileDto;

    const latLngPoints: Point = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    const existingMarketplaceProfile =
      await this.MarketplaceProfileRepository.findOne({
        where: { createdBy: createMarketplaceProfileDto.createdBy },
      });
    if (existingMarketplaceProfile) {
      throw new Error("You cannot create more than one MarketplaceProfile");
    }

    await this.MarketplaceProfileRepository.save({
      ...createMarketplaceProfileDto,
      location: latLngPoints,
    });

    return { message: "MarketplaceProfile created successfully" };
  }

  async findAllMarketplaceProfilees(): Promise<IMarketplaceProfileResponse[]> {
    const MarketplaceProfilees = await this.MarketplaceProfileRepository.find();
    return MarketplaceProfilees.map(this.transformToMarketplaceProfileResponse);
  }

  async findMarketplaceProfileById(
    id: string
  ): Promise<IMarketplaceProfileResponse> {
    const MarketplaceProfile = await this.MarketplaceProfileRepository.findOne({
      where: { id },
    });

    return this.transformToMarketplaceProfileResponse(MarketplaceProfile);
  }

  async updateMarketplaceProfile(
    id: string,
    updateMarketplaceProfileDto: CreateMarketplaceProfileDto
  ): Promise<ISuccessReponse> {
    const existingMarketplaceProfile =
      await this.MarketplaceProfileRepository.findOne({
        where: { id: id },
      });
    if (existingMarketplaceProfile) {
      throw new Error("You cannot create more than one MarketplaceProfile");
    }

    await this.MarketplaceProfileRepository.update(
      id,
      updateMarketplaceProfileDto
    );

    return { message: "MarketplaceProfile updated successfully" };
  }

  async deleteMarketplaceProfile(id: string): Promise<ISuccessReponse> {
    await this.MarketplaceProfileRepository.delete(id);

    return { message: "MarketplaceProfile deleted successfully" };
  }

  private transformToMarketplaceProfileResponse(
    MarketplaceProfile: MarketplaceProfileEntity
  ): IMarketplaceProfileResponse {
    return {
      id: MarketplaceProfile.id,
      name: MarketplaceProfile.name,
      location: MarketplaceProfile.location,
      entityId: MarketplaceProfile.entityId,
      type: MarketplaceProfile.type,
      createdBy: MarketplaceProfile.createdBy,
    };
  }
}
