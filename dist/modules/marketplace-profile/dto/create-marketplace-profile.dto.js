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
exports.CreateMarketplaceProfileDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMarketplaceProfileDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number }, entityId: { required: true, type: () => String }, type: { required: true, type: () => String }, createdBy: { required: true, type: () => String } };
    }
}
exports.CreateMarketplaceProfileDto = CreateMarketplaceProfileDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMarketplaceProfileDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], CreateMarketplaceProfileDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], CreateMarketplaceProfileDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMarketplaceProfileDto.prototype, "entityId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMarketplaceProfileDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMarketplaceProfileDto.prototype, "createdBy", void 0);
//# sourceMappingURL=create-marketplace-profile.dto.js.map