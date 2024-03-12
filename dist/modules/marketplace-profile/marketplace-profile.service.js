"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceProfileService = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("../../repository/index");
let MarketplaceProfileService = class MarketplaceProfileService {
    constructor(MarketplaceProfileRepository) {
        this.MarketplaceProfileRepository = MarketplaceProfileRepository;
    }
    async createMarketplaceProfile(createMarketplaceProfileDto) {
        const { latitude, longitude } = createMarketplaceProfileDto;
        const latLngPoints = {
            type: "Point",
            coordinates: [longitude, latitude],
        };
        const existingMarketplaceProfile = await this.MarketplaceProfileRepository.findOne({
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
    async findAllMarketplaceProfilees() {
        const MarketplaceProfilees = await this.MarketplaceProfileRepository.find();
        return MarketplaceProfilees.map(this.transformToMarketplaceProfileResponse);
    }
    async findMarketplaceProfileById(id) {
        const MarketplaceProfile = await this.MarketplaceProfileRepository.findOne({
            where: { id },
        });
        return this.transformToMarketplaceProfileResponse(MarketplaceProfile);
    }
    async updateMarketplaceProfile(id, updateMarketplaceProfileDto) {
        const existingMarketplaceProfile = await this.MarketplaceProfileRepository.findOne({
            where: { id: id },
        });
        if (existingMarketplaceProfile) {
            throw new Error("You cannot create more than one MarketplaceProfile");
        }
        await this.MarketplaceProfileRepository.update(id, updateMarketplaceProfileDto);
        return { message: "MarketplaceProfile updated successfully" };
    }
    async deleteMarketplaceProfile(id) {
        await this.MarketplaceProfileRepository.delete(id);
        return { message: "MarketplaceProfile deleted successfully" };
    }
    transformToMarketplaceProfileResponse(MarketplaceProfile) {
        return {
            id: MarketplaceProfile.id,
            name: MarketplaceProfile.name,
            location: MarketplaceProfile.location,
            entityId: MarketplaceProfile.entityId,
            type: MarketplaceProfile.type,
            createdBy: MarketplaceProfile.createdBy,
        };
    }
};
exports.MarketplaceProfileService = MarketplaceProfileService;
exports.MarketplaceProfileService = MarketplaceProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [index_1.MarketplaceProfileRepository])
], MarketplaceProfileService);
//# sourceMappingURL=marketplace-profile.service.js.map