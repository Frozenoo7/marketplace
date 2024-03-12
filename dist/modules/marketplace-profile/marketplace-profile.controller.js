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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceProfileController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_marketplace_profile_dto_1 = require("./dto/create-marketplace-profile.dto");
const marketplace_profile_service_1 = require("./marketplace-profile.service");
let MarketplaceProfileController = class MarketplaceProfileController {
    constructor(marketplaceProfileService) {
        this.marketplaceProfileService = marketplaceProfileService;
    }
    async createBusiness(createBusinessDto) {
        return this.marketplaceProfileService.createMarketplaceProfile(createBusinessDto);
    }
    async findAllBusiness() {
        return this.marketplaceProfileService.findAllMarketplaceProfilees();
    }
    async findBusinessById(id) {
        return this.marketplaceProfileService.findMarketplaceProfileById(id);
    }
    async updateBusiness(id, updateBusinessDto) {
        return this.marketplaceProfileService.updateMarketplaceProfile(id, updateBusinessDto);
    }
    async deleteBusiness(id) {
        return this.marketplaceProfileService.deleteMarketplaceProfile(id);
    }
};
exports.MarketplaceProfileController = MarketplaceProfileController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../common/responses/success.response").ISuccessReponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_marketplace_profile_dto_1.CreateMarketplaceProfileDto]),
    __metadata("design:returntype", Promise)
], MarketplaceProfileController.prototype, "createBusiness", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./response/marketplace-profile.response").IMarketplaceProfileResponse] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketplaceProfileController.prototype, "findAllBusiness", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: require("./response/marketplace-profile.response").IMarketplaceProfileResponse }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketplaceProfileController.prototype, "findBusinessById", null);
__decorate([
    (0, common_1.Put)(":id"),
    openapi.ApiResponse({ status: 200, type: require("../../common/responses/success.response").ISuccessReponse }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_marketplace_profile_dto_1.CreateMarketplaceProfileDto]),
    __metadata("design:returntype", Promise)
], MarketplaceProfileController.prototype, "updateBusiness", null);
__decorate([
    (0, common_1.Delete)(":id"),
    openapi.ApiResponse({ status: 200, type: require("../../common/responses/success.response").ISuccessReponse }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketplaceProfileController.prototype, "deleteBusiness", null);
exports.MarketplaceProfileController = MarketplaceProfileController = __decorate([
    (0, common_1.Controller)("marketplace-profile"),
    __metadata("design:paramtypes", [marketplace_profile_service_1.MarketplaceProfileService])
], MarketplaceProfileController);
//# sourceMappingURL=marketplace-profile.controller.js.map