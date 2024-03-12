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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceProfileEntity = void 0;
const typeorm_1 = require("typeorm");
const geojson_1 = require("geojson");
const base_entity_1 = require("./base.entity");
let MarketplaceProfileEntity = class MarketplaceProfileEntity extends base_entity_1.BaseEntity {
};
exports.MarketplaceProfileEntity = MarketplaceProfileEntity;
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], MarketplaceProfileEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Index)({ spatial: true }),
    (0, typeorm_1.Column)({
        type: "geography",
        spatialFeatureType: "Point",
        srid: 6207,
        nullable: true,
    }),
    __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
], MarketplaceProfileEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], MarketplaceProfileEntity.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], MarketplaceProfileEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarketplaceProfileEntity.prototype, "createdBy", void 0);
exports.MarketplaceProfileEntity = MarketplaceProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "marketplaceProfile" })
], MarketplaceProfileEntity);
//# sourceMappingURL=marketplace-profile.entity.js.map