"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const index_entity_1 = require("../entities/index.entity");
const index_1 = require("./index");
let RepositoryModule = class RepositoryModule {
};
exports.RepositoryModule = RepositoryModule;
exports.RepositoryModule = RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                index_entity_1.CategoryEntity,
                index_entity_1.ProductEntity,
                index_entity_1.MarketplaceProfileEntity,
            ]),
        ],
        providers: [
            index_1.CategoryRepository,
            index_1.ProductRepository,
            index_1.MarketplaceProfileRepository,
        ],
        exports: [
            index_1.CategoryRepository,
            index_1.ProductRepository,
            index_1.MarketplaceProfileRepository,
        ],
    })
], RepositoryModule);
//# sourceMappingURL=repository.module.js.map